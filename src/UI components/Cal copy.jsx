import TableHead from "./TableHead"; // Import TableHead component
import TableCell from "./TableCell"; // Import TableCell component

function TableRow({ days, startIndex }) {
  // Fill the row with days, considering the starting index for the first day
  const rowDays = Array.from({ length: 7 }, (_, i) => {
    const day = days[startIndex + i];
    return day !== undefined ? day : null; // If no day, return null
  });

  return (
    <tr>
      {rowDays.map((day, index) => (
        <TableCell key={index} day={day}>
          {day && (
            <>
              <p>Breakfast: Example Breakfast</p>
            </>
          )}
        </TableCell>
      ))}
    </tr>
  );
}

function Cal() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const daysInMonth = 31; // Set the number of days in the month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Find out which day of the week the 1st of the month is on (e.g., Sunday = 0, Monday = 1, etc.)
  const startDayOfMonth = new Date(2025, 0, 1).getDay(); // For example, January 1st, 2025

  // Calculate the number of rows needed
  const numberOfRows = Math.ceil((daysInMonth + startDayOfMonth) / 7);

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
          {/* Generate rows dynamically */}
          {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <TableRow
              key={rowIndex}
              days={days}
              startIndex={rowIndex * 7 - startDayOfMonth}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cal;
