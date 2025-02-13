import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import { useLocalStorage } from "../helpers/useLocalStorage";

function Week() {
  // Get all dishes and rule objects from the context
  const { allDishes, dietaryRules, allergyRules } = useManagerContext();
  // Get the selected employee (which contains diet and allergies)
  const { selectedEmployee, employeesArray, setEmployeesArray } =
    useAllergyDietContext();
  // State for storing dishes that pass the employee's restrictions
  const [filteredDishes, setFilteredDishes] = useState([]);
  //  !State for the final meal assignments for the 7 days (one day off)
  // const [mealAssignments, setMealAssignments] = useLocalStorage(
  //   [],
  //   "weeklyMealPlan"
  // );

  // Array of week day names
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Utility function to shuffle an array using Fisher-Yates shuffle
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // -----------------------------------------------------------------------
  // ! EFFECT 1: Filter all dishes based on the employee's diet and allergies
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (
      (allDishes?.length > 0 && !selectedEmployee?.weeklyMealPlan) ||
      selectedEmployee?.weeklyMealPlan?.length === 0
    ) {
      const { diet, allergies } = selectedEmployee;

      const filtered = allDishes.filter((dish) => {
        // Ensure dish.ingredients exists; if not, default to an empty array.
        const ingredients = dish.ingredients || [];

        // Check if the dish meets the employee's dietary restrictions.
        // For each diet type the employee follows, check that the dish
        // does NOT include any restricted ingredient.
        const meetsDietRestrictions = diet.every((dietType) => {
          const restrictedIngredients = dietaryRules[dietType];
          if (!restrictedIngredients) return true; // No rules found? Then it's okay.
          return !restrictedIngredients.some((ingredient) =>
            ingredients.includes(ingredient)
          );
        });

        // Check if the dish contains any of the employee's allergens.
        const containsAllergens = allergies.some((allergyType) => {
          const allergens = allergyRules[allergyType];
          if (!allergens) return false; // No allergens for this type? Skip.
          return allergens.some((allergen) => ingredients.includes(allergen));
        });

        // Only include the dish if it meets diet restrictions and contains no allergens.
        return meetsDietRestrictions && !containsAllergens;
      });

      setFilteredDishes(filtered);
    }
  }, [allDishes, selectedEmployee, dietaryRules, allergyRules]);

  // -----------------------------------------------------------------------
  //  ! EFFECT 2: Assign 7 days of meals with one day off (random day off)
  // ------------------------------------------------------------- ----------
  useEffect(() => {
    if (
      filteredDishes.length > 0 &&
      selectedEmployee &&
      (!selectedEmployee?.weeklyMealPlan ||
        selectedEmployee?.weeklyMealPlan?.length === 0)
    ) {
      // Shuffle the filtered dishes to randomize the order
      const shuffled = shuffleArray(filteredDishes);
      // We need 6 meals to assign to days (since one day will be off)
      const selectedMeals = shuffled.slice(0, 6);

      // Choose a random index between 0 and 6 to be the day off.
      const dayOffIndex = Math.floor(Math.random() * 7);

      // Build an array for 7 days: if the current index is the day off, assign null;
      // otherwise, assign the next meal from selectedMeals.
      const assignments = [];
      let mealIndex = 0;
      for (let i = 0; i < 7; i++) {
        if (i === dayOffIndex) {
          assignments.push(null); // This day is off
        } else {
          assignments.push(selectedMeals[mealIndex] || null);
          mealIndex++;
        }
      }

      setEmployeesArray((previousArray) =>
        previousArray.map((employeeObj) =>
          employeeObj === selectedEmployee
            ? { ...employeeObj, weeklyMealPlan: assignments }
            : employeeObj
        )
      );

      // ! here
      // setMealAssignments(assignments);
    }
  }, [filteredDishes, selectedEmployee]);

  return (
    <div className="bg-background w-full">
      <table className="w-full border border-black table-fixed">
        {/* Render table header with days of the week */}
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
          {/* Render the meal assignments using the TableRow component */}
          {selectedEmployee?.weeklyMealPlan ? (
            <TableRow dailyDishes={selectedEmployee?.weeklyMealPlan} />
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
