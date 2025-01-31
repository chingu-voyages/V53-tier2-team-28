function TableCell({ children, className = "" }) {
  return (
    <td className={`text-textColor border-gray-950 ${className}`}>
      {children}
    </td>
  );
}

export default TableCell;
