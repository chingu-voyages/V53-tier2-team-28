import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
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
import { useLocalStorage } from "../helpers/useLocalStorage";

// ! CREATE USER SNIPPET FOR CONTEXT API TEMPLATE LIKE THIS

const ManagerContext = createContext();

export function ManagerProvider({ children }) {
  const [weeklyOrMonthly, setWeeklyOrMonthly] = useState("Weekly");
  const [allDishes, setAllDishes] = useLocalStorage([], "dishesRecipes");

  function transformDishData(dish) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = dish[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient.toLowerCase());
      }
    }

    return {
      ...dish,
      ingredients, // Add extracted ingredients array
    };
  }

  useEffect(() => {
    if (allDishes.length > 0) return;

    const fetchRecipes = async () => {
      console.log("API is called");
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();

        if (data.meals) {
          const transformedDishes = data.meals
            .slice(0, 100)
            .map(transformDishData)
            .map(addDietAllergyFlagsAndIcons);

          setAllDishes(transformedDishes);
        } else {
          console.error("No recipes found.");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

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
      "Gluten Free": ["bread", "wheat", "barley", "rye", "pasta"],
      Keto: ["sugar", "rice", "potato", "corn"],
      Mediterranean: [],
      Paleo: ["dairy", "grains", "legumes"],
      Vegetarian: [
        "chicken",
        "beef",
        "fish",
        "pork",
        "sausage",
        "lamb",
        "salmon",
      ],
      Vegan: [
        "chicken",
        "beef",
        "fish",
        "pork",
        "milk",
        "eggs",
        "cheese",
        "sausage",
        "lamb",
        "salmon",
        "mayonnaise",
      ],
    };

    const allergyRules = {
      "Nut Allergy": ["almonds", "peanuts", "walnuts", "cashews"],
      "Gluten Allergy": ["bread", "wheat", "barley", "rye", "pasta"],
      "Soy Allergy": ["soy", "tofu", "miso", "edamame"],
      "Dairy Allergy": ["milk", "cheese", "butter", "yogurt"],
      "Shellfish Allergy": ["shrimp", "lobster", "crab"],
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

    // Check for diet restrictions (partial match)
    const dietRestrictions = Object.keys(dietaryRules).filter((dietRule) =>
      dietaryRules[dietRule].some((item) =>
        dish.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(item)
        )
      )
    );

    // Check for allergy restrictions (partial match)
    const allergyRestrictions = Object.keys(allergyRules).filter((allergy) =>
      allergyRules[allergy].some((item) =>
        dish.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(item)
        )
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
      allergyIconsObj: allergyRestrictions.map((allergy) => ({
        name: allergy,
        icon: allergyIconsObj[allergy] || null,
      })),
    };
  }

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

// ! NOT USED ANYMORE

// // ! get and fix up dishes from dishesAPI
// useEffect(() => {
//   async function fetchAllRecipes() {
//     const res = await fetch("https://menus-api.vercel.app/dishes");

//     if (!res.ok) throw new Error("Failed to fetch dishes");
//     const data = await res.json();
//     console.log(data);
//     // ! analyze dish - add allergy/diet flags
//     const allDishesAnalyzed = data.map((dish) =>
//       addDietAllergyFlagsAndIcons(dish)
//     );

//     // ! find 50 images for 50 dishes... pfff who's gonna spend 2 hours doing that ...
//     const dishNames = allDishesAnalyzed.map((dish) => dish.name);

//     // ! store in state
//     setAllDishes(allDishesAnalyzed);
//   }
//   fetchAllRecipes();
// }, []);
