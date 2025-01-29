import { createContext } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const DishesContext = createContext();

function DishesContext({ children }) {
  // ! dishes to be loaded from API not hardcoded here!!
  // ! this will be the object structure!
  const dishes = [
    { title: "John", ID: "", imageUrl: [] },
    { title: "Melissa", ID: "", imageUrl: [] },
    { title: "Cathy", ID: "", imageUrl: [] },
  ];

  function addNewDish() {
    // ! logic
    console.log("new dish added!!");
  }

  function removeDish() {
    // ! logic
    console.log(" dish removed!!");
  }

  return (
    <DishesContext.Provider value={{ dishes }}>
      {children}
    </DishesContext.Provider>
  );
}

export function useDishesContext() {
  return useContext(DishesContext);
}
