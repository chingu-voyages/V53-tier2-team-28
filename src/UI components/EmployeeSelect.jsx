import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function EmployeeSelect() {
  const { employeesArray, selectedEmployee, setSelectedEmployee } =
    useAllergyDietContext();

  return (
    <ul className="flex gap-8">
      {employeesArray.map((employee) => (
        <div
          className={`${
            selectedEmployee?.name === employee.name
              ? "bg-primary"
              : "bg-background"
          } px-4 py-2 font-bold rounded-lg cursor-pointer hover:bg-background-hover hover:text-textColor-lightText transition duration-300 ease-in-out flex items-center max-sm:flex-col`}
          key={employee.employeeID}
          onClick={() => {
            setSelectedEmployee(employee);
          }}
        >
          {employee.name}
        </div>
      ))}
    </ul>
  );
}

export default EmployeeSelect;
