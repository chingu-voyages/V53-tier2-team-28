import { useState } from "react";
import { useManagerContext } from "../contexts/ManagerContext";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

const options = ["Weekly", "Monthly"];

function CalendarSelect() {
  const { weeklyOrMonthly, setWeeklyOrMonthly } = useManagerContext();
  const { selectedEmployee } = useAllergyDietContext();

  if (!selectedEmployee) return null;
  return (
    <ul className="flex gap-8">
      {options.map((option) => (
        <div
          className={`${
            weeklyOrMonthly === option ? "bg-primary" : "bg-background"
          } px-4 py-2 font-bold rounded-lg cursor-pointer hover:bg-background-hover hover:text-textColor-lightText transition duration-300 ease-in-out`}
          key={option}
          onClick={() => setWeeklyOrMonthly(option)}
        >
          {option}
        </div>
      ))}
    </ul>
  );
}

export default CalendarSelect;
