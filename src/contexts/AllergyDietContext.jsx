import { createContext, useContext } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  // ! write logic which will save the allergies and diet restrictions on signup using this context

  const employeeDietAndAllergies = [
    { name: "John", allergies: [], diet: [] },
    { name: "Melissa", allergies: [], diet: [] },
    { name: "Cathy", allergies: [], diet: [] },
  ];

  const employeeList = employeeDietAndAllergies.map(
    (employee) => employee.name
  );

  function addNewEmployee() {
    // ! logic
    console.log("new employee added!!");
  }

  function removeEmployee() {
    // ! logic
    console.log(" employee removed!!");
  }

  return (
    <AllergyDietContext.Provider
      value={{ employeeDietAndAllergies, employeeList }}
    >
      {children}
    </AllergyDietContext.Provider>
  );
}

export function useAllergyDietContext() {
  return useContext(AllergyDietContext);
}
