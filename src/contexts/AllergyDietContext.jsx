import { createContext, useContext, useState } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  const [employeeDietAndAllergies, setEmployeeDietAndAllergies] = useState([
    { name: "John", allergies: [], diet: [] },
    { name: "Melissa", allergies: [], diet: [] },
    { name: "Cathy", allergies: [], diet: [] },
  ]);

  const employeeList = employeeDietAndAllergies.map(
    (employee) => employee.name
  );

  // function addNewEmployee() {
  //   // ! logic
  //   console.log("new employee added!!");
  // }

  // function removeEmployee() {
  //   // ! logic
  //   console.log(" employee removed!!");  // }

  return (
    <AllergyDietContext.Provider
      value={{
        employeeDietAndAllergies,
        setEmployeeDietAndAllergies,
        employeeList,
      }}
    >
      {children}
    </AllergyDietContext.Provider>
  );
}

export function useAllergyDietContext() {
  return useContext(AllergyDietContext);
}
