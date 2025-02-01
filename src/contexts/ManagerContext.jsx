import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  const location = useLocation();
  const isManagerLoggedIn =
    location.pathname === "/app" || location.pathname === "/app/";

  const managerCredentials = {
    username: "manager",
    password: 1234,
  };

  // ! fetching/saving dishes
  useEffect(() => {
    async function fetchDishes() {
      try {
        const res = await fetch("https://menus-api.vercel.app/dishes");
        if (!res.ok) throw new Error("Failed to fetch dishes");
        const data = await res.json();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    }

    fetchDishes();
  }, []);

  // // ! adding/removing dishes
  // function addNewDish(newDish) {
  //   setDishes((prevDishes) => [...prevDishes, newDish]);
  //   console.log("New dish added:", newDish);
  // }

  // function removeDish(dishID) {
  //   setDishes((prevDishes) => prevDishes.filter((dish) => dish.ID !== dishID));
  //   console.log("Dish removed:", dishID);
  // }

  return (
    <ManagerContext.Provider
      value={{ dishes, isManagerLoggedIn, managerCredentials }}
    >
      {children}
    </ManagerContext.Provider>
  );
}

export function useManagerContext() {
  return useContext(ManagerContext);
}
