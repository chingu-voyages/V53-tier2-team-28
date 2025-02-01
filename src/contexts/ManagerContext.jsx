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

  // ! FORKIFY API (BETTER DISH INFO)

  const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
  const API_KEY = "8dca65f9-7186-4b08-b9b4-f198ea66266e";

  // ! FETCH ALL DISHES
  useEffect(() => {
    async function fetchAllRecipes() {
      let allRecipes = [];
      let page = 1; // Start at page 1
      let hasMoreRecipes = true;

      try {
        while (hasMoreRecipes) {
          const res = await fetch(
            `${BASE_URL}?search=pizza&page=${page}&key=${API_KEY}`
          );

          if (!res.ok) throw new Error("Failed to fetch dishes");

          const data = await res.json();
          console.log(data); // Inspect the data structure

          if (data.data && data.data.recipes) {
            allRecipes = [...allRecipes, ...data.data.recipes]; // Add the fetched recipes to the list
          }

          // Check if there are more recipes to load
          if (data.data.recipes.length === 0 || data.data.recipes.length < 10) {
            hasMoreRecipes = false; // Stop if no more recipes are found or if fewer than 10 recipes are returned
          } else {
            page += 1; // Increment page for the next fetch
          }
        }

        setDishes(allRecipes); // Set all the fetched recipes
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    }

    fetchAllRecipes();
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
