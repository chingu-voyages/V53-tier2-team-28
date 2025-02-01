function TableCell({ day, children }) {
  return (
    <td
      className={`text-textColor border-r-2 border-b-2 border-gray-950 w-20 h-20 p-2`}
    >
      <div className="flex flex-col justify-center">
        {/* Style the number separately */}
        {day && <span className="text-right font-bold text-lg">{day}</span>}
        {/* Other content, like meals, will follow */}
        {children}
      </div>
    </td>
  );
}

export default TableCell;
