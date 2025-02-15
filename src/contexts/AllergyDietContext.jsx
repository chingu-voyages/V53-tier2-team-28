import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  const [employeesArray, setEmployeesArray] = useLocalStorage(
    [
      {
        name: "John",
        allergies: ["DairyAllergy"],
        diet: ["Keto"],
        employeeID: Math.random(), // ! CHECK IF CRYPTO IS THE PROBLEM
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
        allergies: ["ShellfishAllergy"],
        diet: ["Vegan", "Paleo"],
        employeeID: Math.random(),
      },
      {
        name: "Aaron",
        allergies: ["ShellfishAllergy"],
        diet: ["Mediterranean"],
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
