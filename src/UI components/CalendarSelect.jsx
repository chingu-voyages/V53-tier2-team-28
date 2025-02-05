import { useState } from "react";

function CalendarSelect() {
  const options = ["Weekly", "Monthly"];

  const [weeklyOrMonthly, setWeeklyOrMonthly] = useState("weekly");

  return (
    <ul className="flex gap-8">
      {options.map((option) => (
        <div
          className={`bg-background px-4 py-2 font-bold rounded-lg cursor-pointer hover:bg-background-hover hover:text-textColor-lightText transition duration-300 ease-in-out`}
          // key={employee.employeeID}
          // onClick={() => setWeeklyOrMonthly(employee)}
        >
          {option}
        </div>
      ))}
    </ul>
  );
}

export default CalendarSelect;
