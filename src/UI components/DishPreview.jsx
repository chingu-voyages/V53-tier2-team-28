import { useState } from "react";

function DishPreview() {
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
      {/* // ! Container for the recipe image and details, uses flex for responsive layout */}
      <div className="flex flex-col gap-2 md:flex-row items-center lg:items-start p-4 w-full">
        {/* // ! Recipe Details Container:
          - A flex column for displaying the recipe details below the image
          - Adds spacing between elements with `gap-4` and padding with `p-4` */}
        <div className="flex flex-col md:flex-1 gap-3 p-4 max-w-[600px] mx-auto lg:mx-0">
          {/* // ! Title/description div */}
          <div className="border-b-2 border-textColor p-4 ">
            {/* // ! Recipe Title */}
            <h1 className="text-center mt-1 text-2xl font-bold">
              {fakeRecipe.title}
            </h1>
            {/* // ! Recipe Description */}
            <p className="text-center">{fakeRecipe.description}</p>
          </div>
          {/* // ! Ingredients Title */}
          <h3 className="font-semibold text-xl">Ingredients</h3>
          {/* // ! Ingredients List */}
          <ul className="list-disc pl-5">
            {fakeRecipe.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-textColor">
                {ingredient}
              </li>
            ))}
          </ul>
          {/* // ! Calories */}
          <p className="mt-2 text-textColor">Calories: {fakeRecipe.calories}</p>
        </div>

        {/* // ! Recipe Image Container */}
        <div className="relative md:flex-1 w-full grow  h-[300px] md:h-[420px] lg:h-[500px] xl:h-[500px]">
          <img
            className="rounded-3xl opacity-80 h-full w-full object-cover"
            src={fakeRecipe.imageUrl}
            alt={fakeRecipe.title}
          />
        </div>
      </div>
    </div>
  );
}

export default DishPreview;
