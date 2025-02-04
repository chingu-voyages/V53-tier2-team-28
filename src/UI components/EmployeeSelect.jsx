import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function EmployeeSelect() {
  const { employeesArray } = useAllergyDietContext();

  return (
    <ul className="flex gap-8">
      {employeesArray.map((employee) => (
        <div
          key={employee.employeeID}
          className="bg-background px-4 py-2 font-bold rounded-lg cursor-pointer hover:bg-background-hover hover:text-textColor-lightText transition duration-300 ease-in-out"
        >
          {employee.name}
        </div>
      ))}
    </ul>
  );
}

export default EmployeeSelect;
