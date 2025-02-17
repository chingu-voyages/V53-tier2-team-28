import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import Button from "./Button";

function Cal() {
  const { allDishes, dietaryRules, allergyRules } = useManagerContext();
  const {
    selectedEmployee,
    employeesArray,
    setEmployeesArray,
    setSelectedEmployee,
  } = useAllergyDietContext();

  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isFiltering, setIsFiltering] = useState(true);

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

  // Function to handle meal auto-generation
  const handleAutoGenerateMeals = () => {
    if (isFiltering || filteredDishes.length === 0 || !selectedEmployee) {
      console.error("No dishes available or no employee selected.");
      return;
    }

    // Clone and shuffle the dishes to prevent modifying the original array
    const shuffledDishes = shuffleArray([...filteredDishes]);

    // Assign a unique fixed weekly day off per employee
    // For example, employee 1 gets Monday (0), employee 2 gets Tuesday (1), etc.
    const employeeDayOff = selectedEmployee.employeeID % 7; // This ensures each employee gets a unique day off

    // Initialize the monthly meal plan (30 days)
    const monthlyMealPlan = new Array(daysInMonth).fill(null);

    let mealIndex = 0;

    // Loop over each day of the month (30 days)
    for (let day = 0; day < daysInMonth; day++) {
      const dayOfWeek = day % 7; // Get the weekday index (0-6)

      if (dayOfWeek === employeeDayOff) {
        // Assign the same day off every week (unique for each employee)
        monthlyMealPlan[day] = null;
      } else {
        if (mealIndex >= shuffledDishes.length) {
          mealIndex = 0; // Reset index to start repeating meals
        }
        let selectedMeal = shuffledDishes[mealIndex];

        // Prevent consecutive repeats (with a retry limit)
        let retryCount = 0;
        while (
          day > 0 &&
          monthlyMealPlan[day - 1]?.id === selectedMeal?.id &&
          retryCount < shuffledDishes.length
        ) {
          mealIndex = (mealIndex + 1) % shuffledDishes.length;
          selectedMeal = shuffledDishes[mealIndex];
          retryCount++;
        }

        monthlyMealPlan[day] = selectedMeal;
        mealIndex++;
      }
    }

    // Update employee's meal plan in state
    setEmployeesArray((prevArray) =>
      prevArray.map((employee) =>
        employee.employeeID === selectedEmployee.employeeID
          ? { ...employee, monthlyMealPlan }
          : employee
      )
    );
  };

  // -----------------------------------------------------------------------
  // ! EFFECT 1: Filter all dishes based on the employee's diet and allergies
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!selectedEmployee || allDishes.length === 0) return;

    setIsFiltering(true);

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
    setIsFiltering(false);
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

  // ! the effect that solved the bug
  // ! ASK JOHN ABOUT THIS!!!!!!!!!!!!!!
  useEffect(() => {
    if (selectedEmployee) {
      // Find the latest version of selectedEmployee in employeesArray
      const updatedEmployee = employeesArray.find(
        (e) => e.employeeID === selectedEmployee.employeeID
      );

      if (updatedEmployee) {
        setSelectedEmployee(updatedEmployee);
      }
    }
  }, [employeesArray, selectedEmployee, setSelectedEmployee]);

  if (!selectedEmployee) return;
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* Auto-Generate Meals Button */}
      {selectedEmployee && (
        <div className="self-center">
          <Button onClick={handleAutoGenerateMeals}>
            Re-Generate Meals for {selectedEmployee?.name}
          </Button>
        </div>
      )}
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
    </div>
  );
}

export default Cal;
