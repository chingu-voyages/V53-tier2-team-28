import TableHead from "./TableHead"; // Import TableHead component
import TableCell from "./TableCell"; // Import TableCell component

function TableRow({ days }) {
  return (
    <tr>
      {days.map((day, index) => (
        <TableCell key={index} day={day}>
          {day && (
            <>
              <p>Breakfast: Example Breakfast</p>
              <p>Lunch: Example Lunch</p>
              <p>Dinner: Example DDD</p>
            </>
          )}
        </TableCell>
      ))}
    </tr>
  );
}

function Week() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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
          <TableRow days={days} />
        </tbody>
      </table>
    </div>
  );
}

export default Week;
