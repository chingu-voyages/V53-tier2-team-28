import { createContext, useContext, useEffect, useState } from "react";
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
        employeeID: Math.floor(Math.random() * 150),
      },
      {
        name: "Melissa",
        allergies: [],
        diet: ["GlutenFree"],
        employeeID: Math.floor(Math.random() * 150),
      },
      {
        name: "Emilio",
        allergies: [],
        diet: ["Vegan"],
        employeeID: Math.floor(Math.random() * 150),
      },
      {
        name: "Miguel",
        allergies: ["DairyAllergy"],
        diet: ["Vegetarian"],
        employeeID: Math.floor(Math.random() * 150),
      },
      {
        name: "Cassandra",
        allergies: ["DairyAllergy", "ShellfishAllergy"],
        diet: ["Vegan"],
        employeeID: Math.floor(Math.random() * 150),
      },
      {
        name: "Aaron",
        allergies: ["ShellfishAllergy"],
        diet: ["Mediterranean", "Paleo"],
        employeeID: Math.floor(Math.random() * 150),
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
