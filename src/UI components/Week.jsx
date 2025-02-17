import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import Button from "./Button";

function Week() {
  const { allDishes, dietaryRules, allergyRules } = useManagerContext();
  const {
    selectedEmployee,
    employeesArray,
    setEmployeesArray,
    setSelectedEmployee,
  } = useAllergyDietContext();

  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isFiltering, setIsFiltering] = useState(true);

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

  const handleAutoGenerateMeals = () => {
    if (isFiltering || filteredDishes.length === 0 || !selectedEmployee)
      if (filteredDishes.length < 6) {
        console.error("Not enough dishes available for auto-generation");
        return;
      }

    // Shuffle dishes safely
    const shuffled = shuffleArray([...filteredDishes]);
    const selectedMeals = shuffled.slice(0, 6); // Select 6 meals (1 day off)

    // Pick a random day off
    const dayOffIndex = Math.floor(Math.random() * 7);

    // Assign meals to days of the week, ensuring there are no undefined values
    const newWeeklyPlan = daysOfWeek.map((_, index) => {
      if (index === dayOffIndex) return null; // This is the day off
      return selectedMeals.length > 0
        ? selectedMeals.shift()
        : shuffled[Math.floor(Math.random() * shuffled.length)];
    });

    // Update the employee's meal plan in employeesArray
    setEmployeesArray((prevArray) =>
      prevArray.map((employee) =>
        employee.employeeID === selectedEmployee.employeeID
          ? { ...employee, weeklyMealPlan: newWeeklyPlan }
          : employee
      )
    );
  };

  // -----------------------------------------------------------------------
  // ! EFFECT 1: Filter all dishes based on the employee's diet and allergies
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!selectedEmployee) return;

    setIsFiltering(true);

    const { diet, allergies } = selectedEmployee;
    const filtered = allDishes.filter((dish) => {
      const ingredients = dish.ingredients || [];
      const meetsDietRestrictions = diet.every((dietType) => {
        const restrictedIngredients = dietaryRules[dietType] || [];
        return !restrictedIngredients.some((ingredient) =>
          ingredients.includes(ingredient)
        );
      });
      const containsAllergens = allergies.some((allergyType) => {
        const allergens = allergyRules[allergyType] || [];
        return allergens.some((allergen) => ingredients.includes(allergen));
      });

      return meetsDietRestrictions && !containsAllergens;
    });

    setFilteredDishes(filtered);
    setIsFiltering(false);
  }, [allDishes, selectedEmployee, dietaryRules, allergyRules, employeesArray]);
  // added employeesArray to make sure it updates if a change happens

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
    }
  }, [filteredDishes, selectedEmployee]);

  // ! the effect that solved the bug of weekly meal plan not rendering on first click
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

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* Auto-Generate Meals Button */}
      {selectedEmployee && (
        <div className="">
          <Button onClick={handleAutoGenerateMeals}>
            Re-Generate Meals for {selectedEmployee?.name}
          </Button>
        </div>
      )}
      <div className="bg-background w-full">
        <table className="w-full border border-black table-fixed">
          {/* // ! Render table header with days of the week */}
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
            {/* // ! Render the meal assignments using the TableRow component */}
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
    </div>
  );
}

export default Week;
