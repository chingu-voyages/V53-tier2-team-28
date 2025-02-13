import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function Week() {
  const { allDishes } = useManagerContext();
  const { selectedEmployee } = useAllergyDietContext();
  const [filteredDishes, setFilteredDishes] = useState([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    if (allDishes.length > 0 && selectedEmployee) {
      // Get the employee's dietary and allergy restrictions
      const { diet, allergies } = selectedEmployee;

      // Filter dishes based on the selected employee's restrictions
      const filtered = allDishes.filter((dish) => {
        // Check if the dish meets the dietary restrictions
        const meetsDietRestrictions = diet.every(
          (restriction) => !dish.dietRestrictions.includes(restriction)
        );
        // Check if the dish contains any of the employee's allergens
        const containsAllergens = allergies.some((allergy) =>
          dish.allergyRestrictions.includes(allergy)
        );

        // The dish is valid if it meets diet restrictions and doesn't contain allergens
        return meetsDietRestrictions && !containsAllergens;
      });

      console.log(filtered);

      // Update the state with the filtered dishes
      setFilteredDishes(filtered);
    }
  }, [allDishes, selectedEmployee]);

  return (
    <div className="bg-background w-full">
      <table className="w-full border border-black table-fixed">
        <TableHead>
          {daysOfWeek.map((day, index) => (
            <th
              key={index}
              className="text-textColor border-r-2 border-b-2 border-gray-950 w-1/7 h-20 text-center"
            >
              {day}
            </th>
          ))}
        </TableHead>

        <tbody className="h-48">
          {/* Render meal assignments for the week */}
          {filteredDishes.length > 0 ? (
            <TableRow key={0} days={filteredDishes.slice(0, 7)} /> // Assigning 7 filtered recipes
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Loading meals...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Week;
