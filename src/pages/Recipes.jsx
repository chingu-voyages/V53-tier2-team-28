import { useEffect } from "react";
import RecipePreview from "../UI components/RecipePreview";
import { NavLink } from "react-router-dom";

function Recipes() {
  const fakeRecipes = [
    {
      id: 1,
      name: "Pasta",
      ingredients: ["pasta", "tomato", "onion", "garlic"],
    },
    {
      id: 2,
      name: "Pizza",
      ingredients: ["flour", "tomato", "onion", "garlic"],
    },
    {
      id: 3,
      name: "Burger",
      ingredients: ["bread", "tomato", "onion", "garlic"],
    },
  ];

  {
    fakeRecipes.map((recipe) => (
      <div key={recipe.id}>
        <NavLink to={`/recipes/${recipe.id}`}>{recipe.name}</NavLink>
      </div>
    ));
  }
}

export default Recipes;
