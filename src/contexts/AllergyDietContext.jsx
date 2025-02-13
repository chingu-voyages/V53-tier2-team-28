import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  const [employeesArray, setEmployeesArray] = useLocalStorage(
    [
      {
        name: "John",
        allergies: [],
        diet: [],
        employeeID: Math.random(),
      },
      {
        name: "Melissa",
        allergies: [],
        diet: ["GlutenFree"],
        employeeID: Math.random(),
      },
      {
        name: "Emilio",
        allergies: [],
        diet: ["Vegan"],
        employeeID: Math.random(),
      },
      {
        name: "Miguel",
        allergies: ["DairyAllergy"],
        diet: ["Vegetarian"],
        employeeID: Math.random(),
      },
      {
        name: "Cassandra",
        allergies: ["DairyAllergy", "ShellfishAllergy"],
        diet: ["Vegan"],
        employeeID: Math.random(),
      },
      {
        name: "Aaron",
        allergies: ["ShellfishAllergy"],
        diet: ["Mediterranean", "Paleo"],
        employeeID: Math.random(),
      },
    ],
    "employeesArray"
  );

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employeeList = employeesArray.map((employee) => employee.name);

  return (
    <AllergyDietContext.Provider
      value={{
        employeesArray,
        setEmployeesArray,
        employeeList,
        selectedEmployee,
        setSelectedEmployee,
      }}
    >
      {children}
    </AllergyDietContext.Provider>
  );
}

export function useAllergyDietContext() {
  return useContext(AllergyDietContext);
}
