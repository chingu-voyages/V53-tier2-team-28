import { createContext, useContext, useState } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

export function AllergyDietProvider({ children }) {
  const [employeesArray, setEmployeesArray] = useState([
    {
      name: "John",
      allergies: ["Nut Allergy"],
      diet: ["Mediterranean", "Keto"],
      employeeID: Math.random(),
    },
    {
      name: "Melissa",
      allergies: ["Gluten Allergy", "Soy Allergy"],
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
      allergies: ["Dairy Allergy"],
      diet: ["Vegetarian"],
      employeeID: Math.random(),
    },
    {
      name: "Cassandra",
      allergies: ["Dairy Allergy", "Shellfish Allergy"],
      diet: ["Vegan"],
      employeeID: Math.random(),
    },
    {
      name: "Eric",
      allergies: ["Shellfish Allergy"],
      diet: [],
      employeeID: Math.random(),
    },
  ]);

  const employeeList = employeesArray.map((employee) => employee.name);

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
        employeesArray,
        setEmployeesArray,
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
