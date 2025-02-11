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
  const getFilteredMeals = (diet, allergies) => {
    return allDishes.filter((dish) => {
      // Check if the dish matches all dietary preferences and doesn't have any allergies
      const dietMatch = diet.every((dietType) =>
        dish.dietRestrictions.includes(dietType)
      );
      const allergyMatch = allergies.every(
        (allergy) => !dish.allergyRestrictions.includes(allergy)
      );

      return dietMatch && allergyMatch;
    });
  };

  // Get the current week starting from Sunday
  const today = new Date();
  const currentDayIndex = today.getDay(); // Sunday = 0, Monday = 1, etc.
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayIndex);

  // Generate an array of dates for the current week
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date.getDate(); // Return just the day number
  });

  // Function to assign meals to the week, with one off day for each employee
  const assignMealsToWeek = (employee) => {
    const offDayIndex = Math.floor(Math.random() * 7); // Randomly select a day off
    return daysOfWeek.map((_, index) => {
      if (index === offDayIndex) return null; // Employee's off day
      // Get filtered meals based on employee's diet and allergies
      const filteredMeals = getFilteredMeals(employee.diet, employee.allergies);
      console.log(filteredMeals);
      return filteredMeals[Math.floor(Math.random() * filteredMeals.length)]; // Assign random filtered meal
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

        <tbody>
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
