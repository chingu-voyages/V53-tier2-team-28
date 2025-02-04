import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
  const [allDishes, setAllDishes] = useState([]);
  console.log(GlutenFree);
  const location = useLocation();
  const isManagerLoggedIn =
    location.pathname === "/app" || location.pathname === "/app/";

  const managerCredentials = {
    username: "manager",
    password: 1234,
  };

  const dietaryOptions = [
    "GlutenFree",
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

  // !  chat analysis function
  // ! make the Object.keys dynamic
  function addDietAllergyFlags(dish) {
    const dietaryRules = {
      "Gluten Free": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      Keto: ["Sugar", "Rice", "Potato", "Corn"],
      Mediterranean: ["Olive Oil", "Fish", "Nuts", "Legumes"],
      Paleo: ["Dairy", "Grains", "Legumes"],
      Vegetarian: ["Chicken", "Beef", "Fish", "Pork", "Sausage"],
      Vegan: [
        "Chicken",
        "Beef",
        "Fish",
        "Pork",
        "Milk",
        "Eggs",
        "Cheese",
        "Sausage",
      ],
    };

    const allergyRules = {
      "Nut Allergy": ["Almonds", "Peanuts", "Walnuts", "Cashews"],
      "Gluten Allergy": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      "Soy Allergy": ["Soy", "Tofu", "Miso", "Edamame"],
      "Dairy Allergy": ["Milk", "Cheese", "Butter", "Yogurt"],
      "Shellfish Allergy": ["Shrimp", "Lobster", "Crab"],
    };

    const dietIconsObj = {
      "Gluten Free": GlutenFree,
      Keto: Keto,
      Mediterranean: Mediterranean,
      Paleo: Paleo,
      Vegetarian: Vegetarian,
      Vegan: Vegan,
    };

    const dishIngredients = new Set(
      dish.ingredients.map((i) => i.toLowerCase())
    );

    const dietRestrictions = Object.keys(dietaryRules).filter((diet) =>
      dietaryRules[diet].some((item) => dishIngredients.has(item.toLowerCase()))
    );

    const allergyRestrictions = Object.keys(allergyRules).filter((allergy) =>
      allergyRules[allergy].some((item) =>
        dishIngredients.has(item.toLowerCase())
      )
    );

    return {
      ...dish,
      dietRestrictions,
      allergyRestrictions,
      dietIconsObj: dietRestrictions.map((diet) => ({
        name: diet,
        icon: dietIconsObj[diet] || null,
      })),
      fakeImage:
        "https://tse2.mm.bing.net/th?id=OIP.MwazWhKS4ywVTleV0KCkaQHaLH&w=474&h=474&c=7",
    };
  }

  // get and fix up dishes from dishesAPI
  useEffect(() => {
    async function fetchAllRecipes() {
      const res = await fetch("https://menus-api.vercel.app/dishes");

      if (!res.ok) throw new Error("Failed to fetch dishes");
      const data = await res.json();

      // ! analyze dish - add allergy/diet flags
      const allDishesAnalyzed = data.map((dish) => addDietAllergyFlags(dish));
      console.log(allDishesAnalyzed);

      // ! find 50 images for 50 dishes... pfff who's gonna spend 2 hours doing that ...
      const dishNames = allDishesAnalyzed.map((dish) => dish.name);

      // ! store in state
      setAllDishes(allDishesAnalyzed);
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
        allDishes,
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

// // ! FORKIFY API (BETTER DISH INFO)

// const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
// const API_KEY = "8dca65f9-7186-4b08-b9b4-f198ea66266e";
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
