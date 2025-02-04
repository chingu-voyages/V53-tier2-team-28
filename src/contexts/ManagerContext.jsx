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

  const dietaryOptions = [
    "Gluten Free",
    "Keto",
    "Mediterranean",
    "Paleo",
    "Vegetarian",
    "Vegan",
  ];

  const allergyOptions = [
    "Nut Allergy",
    "Gluten Allergy",
    "Soy Allergy",
    "Dairy Allergy",
    "Shellfish Allergy",
  ];

  // ! FORKIFY API (BETTER DISH INFO)

  const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
  const API_KEY = "8dca65f9-7186-4b08-b9b4-f198ea66266e";

  // ! FETCH ALL DISHES (forkify API)
  // useEffect(() => {
  //   async function fetchAllRecipes() {
  //     let allRecipes = [];
  //     const keywords = [
  //       "chicken",
  //       "pasta",
  //       "salad",
  //       "dessert",
  //       "beef",
  //       "fish",
  //       "vegetarian",
  //     ]; // Broad categories
  //     const maxPages = 3; // Prevents infinite loops

  //     try {
  //       for (const keyword of keywords) {
  //         let page = 1;
  //         let hasMoreRecipes = true;

  //         while (hasMoreRecipes && page <= maxPages) {
  //           const res = await fetch(
  //             `${BASE_URL}?search=${keyword}&page=${page}&key=${API_KEY}`
  //           );

  //           if (!res.ok)
  //             throw new Error(`Failed to fetch dishes for ${keyword}`);

  //           const data = await res.json();
  //           console.log(
  //             `Fetched ${data.data.recipes.length} recipes for ${keyword}`
  //           );

  //           if (data.data && data.data.recipes) {
  //             allRecipes = [...allRecipes, ...data.data.recipes];
  //           }

  //           if (
  //             data.data.recipes.length === 0 ||
  //             data.data.recipes.length < 10
  //           ) {
  //             hasMoreRecipes = false;
  //           } else {
  //             page += 1;
  //           }
  //         }
  //       }

  //       setDishes(allRecipes);
  //     } catch (error) {
  //       console.error("Error fetching dishes:", error);
  //     }
  //   }

  //   fetchAllRecipes();
  // }, []);

  // !  chat analysis function
  // ! make the Object.keys dynamic
  function addDietAllergyFlags(dish) {
    const dietaryRules = {
      "Gluten Free": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      Keto: ["Sugar", "Rice", "Potato", "Corn"],
      Mediterranean: ["Olive Oil", "Fish", "Nuts", "Legumes"],
      Paleo: ["Dairy", "Grains", "Legumes"],
      Vegetarian: ["Chicken", "Beef", "Fish", "Pork"],
      Vegan: ["Chicken", "Beef", "Fish", "Pork", "Milk", "Eggs", "Cheese"],
    };

    const allergyRules = {
      "Nut Allergy": ["Almonds", "Peanuts", "Walnuts", "Cashews"],
      "Gluten Allergy": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      "Soy Allergy": ["Soy", "Tofu", "Miso", "Edamame"],
      "Dairy Allergy": ["Milk", "Cheese", "Butter", "Yogurt"],
      "Shellfish Allergy": ["Shrimp", "Lobster", "Crab"],
    };

    let dietRestrictions = [];
    let allergyRestrictions = [];

    // Check dietary restrictions
    for (const [diet, restrictedItems] of Object.entries(dietaryRules)) {
      if (
        dish.ingredients.some((ingredient) =>
          restrictedItems.includes(ingredient)
        )
      ) {
        dietRestrictions.push(diet);
      }
    }

    // Check allergy restrictions
    for (const [allergy, restrictedItems] of Object.entries(allergyRules)) {
      if (
        dish.ingredients.some((ingredient) =>
          restrictedItems.includes(ingredient)
        )
      ) {
        allergyRestrictions.push(allergy);
      }
    }

    return {
      ...dish,
      dietRestrictions,
      allergyRestrictions,
    };
  }

  // dishesAPI
  useEffect(() => {
    async function fetchAllRecipes() {
      const res = await fetch("https://menus-api.vercel.app/dishes");

      if (!res.ok) throw new Error("Failed to fetch dishes");
      const data = await res.json();
      console.log(data);

      // ! analyze dish - add flags
      const allDishesAnalyzed = data.map((dish) => addDietAllergyFlags(dish));
      console.log(allDishesAnalyzed);

      // ! store in state

      // setDishes()
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
      value={{
        dishes,
        isManagerLoggedIn,
        managerCredentials,
        dietaryOptions,
        allergyOptions,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}

export function useManagerContext() {
  return useContext(ManagerContext);
}
