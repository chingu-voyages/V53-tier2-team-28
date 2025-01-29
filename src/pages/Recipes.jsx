import { NavLink, Outlet } from "react-router-dom";

function Recipes() {
  const fakeRecipes = [
    {
      ID: 1,
      name: "Pasta",
      ingredients: ["pasta", "tomato", "onion", "garlic"],
    },
    {
      ID: 2,
      name: "Pizza",
      ingredients: ["flour", "tomato", "onion", "garlic"],
    },
    {
      ID: 3,
      name: "Burger",
      ingredients: ["bread", "tomato", "onion", "garlic"],
    },
  ];

  return (
    <div>
      <h1>Recipes</h1>
      {fakeRecipes.map((recipe) => (
        <div key={recipe.ID}>
          <NavLink to={`/recipes/${recipe.ID}`}>{recipe.name}</NavLink>
        </div>
      ))}

      {/* This ensures RecipePreview renders when route matches */}
      <Outlet />
    </div>
  );
}

export default Recipes;
