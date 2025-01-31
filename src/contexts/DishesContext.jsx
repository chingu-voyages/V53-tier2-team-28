import { createContext, useContext, useEffect, useState } from "react";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const DishesContext = createContext();

export function DishesProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await fetch("https://menus-api.vercel.app/dishes");
        if (!response.ok) throw new Error("Failed to fetch dishes");
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    }

    fetchDishes();
  }, []);

  function addNewDish(newDish) {
    setDishes((prevDishes) => [...prevDishes, newDish]);
    console.log("New dish added:", newDish);
  }

  function removeDish(dishID) {
    setDishes((prevDishes) => prevDishes.filter((dish) => dish.ID !== dishID));
    console.log("Dish removed:", dishID);
  }

  return (
    <DishesContext.Provider value={{ dishes, addNewDish, removeDish }}>
      {children}
    </DishesContext.Provider>
  );
}

export function useDishesContext() {
  return useContext(DishesContext);
}
