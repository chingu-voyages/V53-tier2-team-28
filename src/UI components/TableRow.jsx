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
