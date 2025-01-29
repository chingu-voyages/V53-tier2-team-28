import { createContext } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const AllergyDietContext = createContext();

function AllergyDietContext({ children }) {
  // ! write logic which will save the allergies and diet restrictions on signup using this context

  const employees = [
    { name: "John", allergies: [], diet: [] },
    { name: "Melissa", allergies: [], diet: [] },
    { name: "Cathy", allergies: [], diet: [] },
  ];

  function addNewEmployee() {
    // ! logic
    console.log("new employee added!!");
  }

  function removeEmployee() {
    // ! logic
    console.log(" employee removed!!");
  }

  return (
    <AllergyDietContext.Provider value={{}}>
      {children}
    </AllergyDietContext.Provider>
  );
}

export function useAllergyDietContext() {
  return useContext(AllergyDietContext);
}
