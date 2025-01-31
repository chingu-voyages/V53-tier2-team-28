import { createContext, useContext, useState } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  // ! write logic which will save the allergies and diet restrictions on signup using this context

  const [employeeDietAndAllergies, setEmployeeDietAndAllergies] = useState([
    { name: "John", allergies: [], diet: [] },
    { name: "Melissa", allergies: [], diet: [] },
    { name: "Cathy", allergies: [], diet: [] },
  ]);

  const employeeList = employeeDietAndAllergies.map(
    (employee) => employee.name
  );

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
