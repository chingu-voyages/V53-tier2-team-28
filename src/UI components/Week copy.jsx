import { useState, useEffect } from "react";
import TableHead from "./TableHead"; // Import TableHead component
import TableCell from "./TableCell"; // Import TableCell component
import { useManagerContext } from "../contexts/ManagerContext";
import TableRow from "./TableRow";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function Week() {
  const { allDishes } = useManagerContext();
  const [mealAssignments, setMealAssignments] = useState([]); // State for storing meal assignments
  const { selectedEmployee } = useAllergyDietContext();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Function to get filtered dishes based on employee's diet and allergies

  // Get the current week starting from Sunday
  const today = new Date();
  const currentDayIndex = today.getDay(); // Sunday = 0, Monday = 1, etc.
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayIndex);

  // // Generate an array of dates for the current week
  // const days = Array.from({ length: 7 }, (_, i) => {
  //   const date = new Date(startOfWeek);
  //   date.setDate(startOfWeek.getDate() + i);
  //   return date.getDate(); // Return just the day number
  // });
  // Function to filter meals based on diet preferences
  const filterByDiet = (dish, diet) => {
    console.log(diet);
    console.log("diet Restriction for: ", dish, ":", dish.dietRestrictions);
    return diet.every((dietType) => !dish.dietRestrictions.includes(dietType));
  };

  // Function to filter meals based on allergy restrictions
  const filterByAllergy = (dish, allergies) => {
    return allergies.every(
      (allergy) => !dish.allergyRestrictions.includes(allergy)
    );
  };

  // Function to get meals that match both diet and allergy restrictions
  const getFilteredMeals = (diet, allergies) => {
    return allDishes.filter(
      (dish) => filterByDiet(dish, diet) && filterByAllergy(dish, allergies)
    );
  };

  // Function to assign meals to the week, ensuring one off day per employee
  const assignMealsToWeek = (employee) => {
    const offDayIndex = Math.floor(Math.random() * 7); // Randomly select a day off
    return daysOfWeek.map((_, index) => {
      if (index === offDayIndex) return null; // Employee's off day

      // Get filtered meals based on employee's diet and allergies
      const filteredMeals = getFilteredMeals(employee.diet, employee.allergies);
      console.log("filteredMeals:", filteredMeals);
      if (filteredMeals.length === 0) {
        console.warn(
          `No meals available for diet ${employee.diet} and allergies ${employee.allergies}`
        );
        return null; // No suitable meal found
      }

      return filteredMeals[Math.floor(Math.random() * filteredMeals.length)]; // Assign a random filtered meal
    });
  };

  // Generate meal assignments when the component mounts
  useEffect(() => {
    if (!selectedEmployee) return;
    console.log("effect running");
    const generatedMeals = assignMealsToWeek(selectedEmployee);
    setMealAssignments([generatedMeals]); // Wrap in an array to match expected structure
  }, [allDishes, selectedEmployee]);

  return (
    <div className="bg-background w-full">
      <table className="w-full border border-black table-fixed sm:text-xs">
        <TableHead>
          {daysOfWeek.map((day, index) => (
            <th
              key={index}
              className="text-textColor border-r-2 border-b-2 border-gray-950 w-1/7 h-20 text-center sm:txt-xs"
            >
              {day}
            </th>
          ))}
        </TableHead>

        <tbody className="h-48 ">
          {/* Render each row for each employee */}
          {mealAssignments.map((employeeMeals, rowIndex) => (
            <TableRow key={rowIndex} days={employeeMeals} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Week;
