function TableHead({ children }) {
  return (
    <thead className="border-b-2 border-x-textColor">
      <tr>{children}</tr>
    </thead>
  );
}

export default TableHead;
