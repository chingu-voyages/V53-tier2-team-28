import { useEffect, useState } from "react";
import { useManagerContext } from "../contexts/ManagerContext";
import SmallestIcon from "./Smallesticon";
import SmallIcon from "./SmallIcon"; // Component for displaying smaller icons (if needed)
import TableCell from "./TableCell";

function TableRow({ dailyDishes }) {
  // Log the daily dishes array for debugging purposes
  const { setSelectedDish } = useManagerContext();

  // Prevent rendering if dailyDishes is empty or undefined
  if (!dailyDishes || dailyDishes.length === 0) return null;

  return (
    // Create a table row (<tr>) that will hold a cell for each day of the week.
    <tr className="h-full w-full grow">
      {dailyDishes?.map((meal, index) => (
        // For each day, create a TableCell component.
        <TableCell key={index} day={index + 1}>
          {meal ? (
            // If a meal is assigned for the day:
            <>
              {/* Display the meal name  */}
              <h1
                onClick={() => setSelectedDish(meal)}
                className="text-2xl truncate whitespace-nowrap overflow-hidden"
              >
                {meal.strMeal}
              </h1>
              {/* Container for the allergy icons or a message if none exist */}
              <div className="flex flex-col items-center">
                {meal.allergyIconsObj && meal.allergyIconsObj.length > 0 ? (
                  // If there are allergy icons, display a label and the icons
                  <>
                    <span className="text-xs mb-1">Allergy flags:</span>
                    <div className="flex gap-2 justify-center overflow-hidden">
                      <SmallestIcon
                        key={index}
                        iconsArray={meal.allergyIconsObj}
                      />
                    </div>
                  </>
                ) : (
                  // If no allergy icons, display a "NO ALLERGY FLAGS" message
                  <span className="text-xs mb-1">NO ALLERGY FLAGS </span>
                )}
              </div>
            </>
          ) : (
            // If no meal is assigned, display "Day Off" with overflow prevention
            <h1 className="truncate whitespace-nowrap overflow-hidden">
              Day Off
            </h1>
          )}
        </TableCell>
      ))}
    </tr>
  );
}

export default TableRow;
