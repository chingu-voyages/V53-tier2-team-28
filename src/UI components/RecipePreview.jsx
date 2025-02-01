import { useState } from "react";

// Sample RecipePreview Component
function RecipePreview() {
  const [isLoading, setIsLoading] = useState(false);

  // Fake Recipe Data
  const fakeRecipe = {
    title: "Vegetable Stir Fry",
    imageUrl: "../../src/background photos/pexels-n-voitkevich-6252738.jpg", // Placeholder image URL
    description:
      "A healthy and delicious vegetable stir fry with a variety of fresh veggies.",
    ingredients: ["Vanilla", "Bread", "Zucchini", "Parsley"],
    calories: 298,
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    // ! Main container that holds everything in a row layout with gap between sections
    <div className="bg-background flex justify-center lg:justify-between lg:gap-10 mt-5 lg:mt-8 rounded-xl">
      {/* // !  Container for the recipe image and details, uses flex for responsive layout */}
      <div className="flex flex-col gap-2 lg:flex-row items-center lg:items-start">
        {/* // !  Recipe Details Container:
          - A flex column for displaying the recipe details below the image
          - Adds spacing between elements with `gap-4` and padding with `p-4` */}
        <div className="flex flex-col gap-3 p-4">
          {/* // !  Recipe Title: 
            - Styled as a large, bold font */}
          <h1 className="text-center mt-1 text-2xl font-bold">
            {fakeRecipe.title}
          </h1>

          {/* // !  Recipe Description: 
            - Slightly lighter text color for description */}
          <p className="text-center">{fakeRecipe.description}</p>

          {/* // !  Ingredients Title: 
            - Styled as a slightly smaller, bold text */}
          <h3 className="font-semibold text-xl">Ingredients</h3>

          {/* // !  Ingredients List:
            - Displays each ingredient with a disc (bullet) style */}
          <ul className="list-disc pl-5">
            {fakeRecipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-textColor">
                {ingredient}
              </li>
            ))}
          </ul>

          {/* // !  Calories:
            - Displays the calories information with a gray text color */}
          <p className="mt-2 text-textColor">Calories: {fakeRecipe.calories}</p>
        </div>

        {/* // !  Recipe Image Container: 
          - The image is wrapped in a div with a relative position for potential overlays
          - Responsive width and height based on screen size (200px to 500px) */}
        <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]">
          {/* // !  Recipe Image: 
            - `rounded-lg` for rounded corners
            - `opacity-80` for slight transparency
            - `h-full w-full` for full width and height
            - `object-cover` ensures the image covers the entire space */}
          <img
            className="p-4 rounded-3xl opacity-80 h-full w-full object-cover"
            src={fakeRecipe.imageUrl}
            alt={fakeRecipe.title}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipePreview;
