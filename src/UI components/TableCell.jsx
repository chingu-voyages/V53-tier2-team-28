function TableCell({ day, children, name }) {
  return (
    <td
      className={`text-textColor border-r-2 border-b-2 border-gray-950 p-2 h-full align-baseline`}
    >
      <h2>{name}</h2>
      <div className="flex flex-col justify-center items-center grow h-full">
        {/* Style the number separately */}
        {day ? <span className=" font-bold text-lg self-end">{day}</span> : ""}
        {/* Other content, like meals, will follow */}
        {children}
      </div>
    </td>
  );
}

export default TableCell;
