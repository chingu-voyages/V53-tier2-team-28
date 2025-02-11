import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";
import NutAllergy from "../assets/allergen-nuts.png";
import GlutenAllergy from "../assets/allergen-wheat.png";
import DairyAllergy from "../assets/allergen-milk.png";
import ShellfishAllergy from "../assets/allergen-fish.png";
import SoyAllergy from "../assets/allergen-soy.png";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
  const [allDishes, setAllDishes] = useState([]);
  const [weeklyOrMonthly, setWeeklyOrMonthly] = useState("Weekly");

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
    "NutAllergy",
    "GlutenAllergy",
    "SoyAllergy",
    "DairyAllergy",
    "ShellfishAllergy",
  ];

  // ! based on ingredients, add diet and allergies
  function addDietAllergyFlagsAndIcons(dish) {
    const dietaryRules = {
      "Gluten Free": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      Keto: ["Sugar", "Rice", "Potato", "Corn"],
      Mediterranean: [],
      Paleo: ["Dairy", "Grains", "Legumes"],
      Vegetarian: [
        "Chicken",
        "Beef",
        "Fish",
        "Pork",
        "Sausage",
        "Lamb",
        "Salmon",
      ],
      Vegan: [
        "Chicken",
        "Beef",
        "Fish",
        "Pork",
        "Milk",
        "Eggs",
        "Cheese",
        "Sausage",
        "Lamb",
        "Salmon",
      ],
    };

    const allergyRules = {
      "Nut Allergy": ["Almonds", "Peanuts", "Walnuts", "Cashews"],
      "Gluten Allergy": ["Bread", "Wheat", "Barley", "Rye", "Pasta"],
      "Soy Allergy": ["Soy", "Tofu", "Miso", "Edamame"],
      "Dairy Allergy": ["Milk", "Cheese", "Butter", "Yogurt", "Yoghurt"],
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

    const allergyIconsObj = {
      "Nut Allergy": NutAllergy,
      "Gluten Allergy": GlutenAllergy,
      "Soy Allergy": SoyAllergy,
      "Dairy Allergy": DairyAllergy,
      "Shellfish Allergy": ShellfishAllergy,
    };

    const dishIngredients = new Set(
      dish.ingredients.map((i) => i.toLowerCase())
    );

    const dietRestrictions = Object.keys(dietaryRules).filter((dietRule) =>
      dietaryRules[dietRule].some((item) =>
        dishIngredients.has(item.toLowerCase())
      )
    );

    const allergyRestrictions = Object.keys(allergyRules).filter((allergy) =>
      allergyRules[allergy].some((item) =>
        dishIngredients.has(item.toLowerCase())
      )
    );
    // List of available dish images
    const dishImages = [
      "../assets/dishes-mock-images/george-zheng-0Kbjfwunink-unsplash.jpg",
      "../assets/dishes-mock-images/irene-kredenets-6unxGRCPg0U-unsplash.jpg",
      "../assets/dishes-mock-images/khloe-arledge-ND3edEmzcdQ-unsplash.jpg",
      "../assets/dishes-mock-images/peter-dawn-3X7SVgAxKU8-unsplash.jpg",
    ];

    // Select a random image
    const randomImage =
      dishImages[Math.floor(Math.random() * dishImages.length)];

    return {
      ...dish,
      dietRestrictions,
      allergyRestrictions,
      dietIconsObj: dietRestrictions.map((diet) => ({
        name: diet,
        icon: dietIconsObj[diet] || null,
      })),
      allergyIconsObj: allergyRestrictions.map((allergy) => ({
        name: allergy,
        icon: allergyIconsObj[allergy] || null,
      })),
      fakeImage: randomImage,
    };
  }

  // ! get and fix up dishes from dishesAPI
  useEffect(() => {
    async function fetchAllRecipes() {
      const res = await fetch("https://menus-api.vercel.app/dishes");

      if (!res.ok) throw new Error("Failed to fetch dishes");
      const data = await res.json();

      // ! analyze dish - add allergy/diet flags
      const allDishesAnalyzed = data.map((dish) =>
        addDietAllergyFlagsAndIcons(dish)
      );

      // ! find 50 images for 50 dishes... pfff who's gonna spend 2 hours doing that ...
      const dishNames = allDishesAnalyzed.map((dish) => dish.name);

      // ! store in state
      setAllDishes(allDishesAnalyzed);
    }
    fetchAllRecipes();
  }, []);

  // // ! FORKIFY API (BETTER DISH INFO)

  // const BASE_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
  // const API_KEY = "8dca65f9-7186-4b08-b9b4-f198ea66266e";
  // // ! FETCH ALL DISHES (forkify API)
  // useEffect(() => {
  //   async function fetchFilteredRecipes() {
  //     const keywords = [
  //       "chicken",
  //       "bread",
  //       "avocado",
  //       "pasta",
  //       "salad",
  //       "dessert",
  //       "beef",
  //       "fish",
  //       "vegetarian",
  //     ]; // Broad categories

  //     try {
  //       const fetchPromises = keywords.map(async (keyword) => {
  //         const res = await fetch(
  //           `${BASE_URL}?search=${keyword}&key=${API_KEY}`
  //         );
  //         if (!res.ok) throw new Error(`Failed to fetch dishes for ${keyword}`);
  //         const data = await res.json();
  //         return data.data?.recipes || [];
  //       });

  //       // Wait for all API calls to resolve
  //       const allResults = await Promise.all(fetchPromises);

  //       // Flatten results and remove duplicates
  //       const allRecipes = Array.from(
  //         new Map(
  //           allResults.flat().map((recipe) => [recipe.id, recipe])
  //         ).values()
  //       );
  //       console.log(allRecipes);

  //       setAllDishes(allRecipes);
  //     } catch (error) {
  //       console.error("Error fetching dishes:", error);
  //     }
  //   }

  //   fetchFilteredRecipes();
  // }, []);

  // // ! alrernatinve - maxes API calls
  // // useEffect(() => {
  // //   async function fetchAllRecipes() {
  // //     let allRecipes = [];
  // //     const keywords = [
  // //       "chicken",
  // //       "bread",
  // //       "avocado",
  // //       "",
  // //       "pasta",
  // //       "salad",
  // //       "dessert",
  // //       "beef",
  // //       "fish",
  // //       "vegetarian",
  // //     ]; // Broad categories
  // //     const maxPages = 3; // Prevents infinite loops

  // //     try {
  // //       for (const keyword of keywords) {
  // //         let page = 1;
  // //         let hasMoreRecipes = true;

  // //         while (hasMoreRecipes && page <= maxPages) {
  // //           const res = await fetch(
  // //             `${BASE_URL}?search=${keyword}&page=${page}&key=${API_KEY}`
  // //           );

  // //           if (!res.ok)
  // //             throw new Error(`Failed to fetch dishes for ${keyword}`);

  // //           const data = await res.json();
  // //           console.log(
  // //             `Fetched ${data.data.recipes.length} recipes for ${keyword}`
  // //           );

  // //           if (data.data && data.data.recipes) {
  // //             allRecipes = [...allRecipes, ...data.data.recipes];
  // //           }

  // //           if (
  // //             data.data.recipes.length === 0 ||
  // //             data.data.recipes.length < 10
  // //           ) {
  // //             hasMoreRecipes = false;
  // //           } else {
  // //             page += 1;
  // //           }
  // //         }
  // //       }

  // //       setAllDishes(allRecipes);
  // //     } catch (error) {
  // //       console.error("Error fetching dishes:", error);
  // //     }
  // //   }

  // //   fetchAllRecipes();
  // // }, []);

  return (
    <ManagerContext.Provider
      value={{
        allDishes,
        isManagerLoggedIn,
        managerCredentials,
        dietaryOptions,
        allergyOptions,
        weeklyOrMonthly,
        setWeeklyOrMonthly,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}

export function useManagerContext() {
  return useContext(ManagerContext);
}
