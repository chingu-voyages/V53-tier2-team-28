import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function Cal() {
  const { allDishes, dietaryRules, allergyRules } = useManagerContext();
  const { selectedEmployee, setEmployeesArray } = useAllergyDietContext();
  const [filteredDishes, setFilteredDishes] = useState([]);

  const daysInMonth = 30;
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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
      (allDishes?.length > 0 && !selectedEmployee?.monthlyMealPlan) ||
      selectedEmployee?.monthlyMealPlan?.length === 0
    ) {
      console.log("effect2 running");

      const { diet, allergies } = selectedEmployee;

      const filtered = allDishes.filter((dish) => {
        const ingredients = dish.ingredients || [];

        const meetsDietRestrictions = diet.every((dietType) => {
          const restrictedIngredients = dietaryRules[dietType];
          if (!restrictedIngredients) return true;
          return !restrictedIngredients.some((ingredient) =>
            ingredients.includes(ingredient)
          );
        });

        const containsAllergens = allergies.some((allergyType) => {
          const allergens = allergyRules[allergyType];
          if (!allergens) return false;
          return allergens.some((allergen) => ingredients.includes(allergen));
        });

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
      (filteredDishes.length > 0 &&
        filteredDishes?.length > 0 &&
        !selectedEmployee?.monthlyMealPlan) ||
      selectedEmployee?.monthlyMealPla?.length === 0
    ) {
      console.log("effect2 running");
      const shuffled = shuffleArray(filteredDishes);

      // Determine a fixed weekday off (consistent for the employee)
      const employeeDayOff = selectedEmployee.employeeID % 7;

      const assignments = new Array(daysInMonth).fill(null);
      let mealIndex = 0;

      for (let i = 0; i < daysInMonth; i++) {
        const dayOfWeek = i % 7;

        if (dayOfWeek === employeeDayOff) {
          assignments[i] = null; // Assign fixed day off
        } else {
          if (mealIndex >= shuffled.length) {
            mealIndex = 0; // Reset index to start repeating meals
          }

          let selectedMeal = shuffled[mealIndex];

          // Prevent consecutive repeats with a controlled retry limit
          let retryCount = 0;
          while (
            i > 0 &&
            assignments[i - 1]?.id === selectedMeal?.id &&
            retryCount < shuffled.length
          ) {
            mealIndex = (mealIndex + 1) % shuffled.length;
            selectedMeal = shuffled[mealIndex];
            retryCount++;
          }

          // If retry limit is reached, just assign the meal (even if consecutive)
          assignments[i] = selectedMeal;
          mealIndex++;
        }
      }
      setEmployeesArray((previousArray) =>
        previousArray.map((employeeObj) =>
          employeeObj === selectedEmployee
            ? { ...employeeObj, monthlyMealPlan: assignments }
            : employeeObj
        )
      );

      // setMealAssignments(assignments);
    }
  }, [filteredDishes, selectedEmployee]);

  if (!selectedEmployee) return;
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
          {Array.from({ length: Math.ceil(daysInMonth / 7) }).map(
            (_, rowIndex) => (
              <TableRow
                key={rowIndex}
                dailyDishes={selectedEmployee?.monthlyMealPlan?.slice(
                  rowIndex * 7,
                  rowIndex * 7 + 7
                )}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Cal;
