function TableHead({ children }) {
  return (
    <thead className="max-w-lg mx-auto p-4 border-b-2 border-x-textColor">
      <tr>{children}</tr>
    </thead>
  );
}

export default TableHead;
