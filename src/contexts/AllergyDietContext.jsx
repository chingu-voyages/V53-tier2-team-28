import { createContext, useContext, useState } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  const [employeesArray, setEmployeesArray] = useState([
    {
      name: "John",
      allergies: ["NutAllergy"],
      diet: ["Mediterranean", "Keto"],
      employeeID: Math.random(),
    },
    {
      name: "Melissa",
      allergies: ["GlutenAllergy", "SoyAllergy"],
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
  ]);

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
