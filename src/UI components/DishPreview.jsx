import { useState } from "react";
import { useManagerContext } from "../contexts/ManagerContext";

import SmallIcon from "./SmallIcon";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function DishPreview({ dishToPreview }) {
  const { selectedEmployee } = useAllergyDietContext();
  const { dietaryOptions, allergyOptions } = useManagerContext();

  const { selectedDish } = useManagerContext();

  // ! fix diet option names and icon names

  // ! loop thru names and match with icon names

  // const dish =
  // const iconsToDisplay =
  // // Fake Recipe Data
  const dish = {
    name: "Vegetable Stir Fry",
    ingredients: ["Vanilla", "Bread", "Zucchini", "Parsley"],
    calories: 298,
    dietRestrictions: ["GlutenFree"],
    allergyRestrictions: ["Gluten Allergy"],
    // ! fake image
    imageUrl:
      "https://unsplash.com/photos/cooked-food-on-black-ceramic-bowl-0Kbjfwunink",
  };

  // ! function to determine which icons to display for allergies/diet

  return (
    // ! Main container that holds everything in a row layout with gap between sections
    <div className="bg-background flex justify-center lg:justify-between lg:gap-10 mt-5 lg:mt-8 rounded-xl">
      {/* // ! Container for the recipe image and details, uses flex for responsive layout */}
      <div className="flex flex-col gap-2 md:flex-row items-center lg:items-start p-4 w-full">
        {/* // ! Recipe Details Container:
          - A flex column for displaying the recipe details below the image
          - Adds spacing between elements with `gap-4` and padding with `p-4` */}
        <div className="flex flex-col h-full w-full items-center md:items-stretch grow md:flex-1 gap-3 p-4 max-w-[600px] mx-auto lg:mx-0">
          {/* // ! Title/description div */}
          <div className="border-b-2 border-textColor p-4 ">
            {/* // ! Recipe Title */}
            <h1 className="text-center mt-1 text-2xl font-bold">
              {selectedDish.strMeal}
            </h1>
            {/* // ! Recipe Description */}
            <p className="text-center">{selectedDish.description}</p>
          </div>
          {/* // ! Ingredients Title */}
          <h3 className="font-semibold text-xl pl-4">Ingredients</h3>
          {/* // ! Ingredients List */}
          <ul className="list-disc pl-10 grid grid-cols-2">
            {selectedDish.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-textColor">
                {ingredient}
              </li>
            ))}
          </ul>
          {/* // ! Calories */}
          <p className="mt-4 text-textColor">
            Calories: {selectedDish.calories}
          </p>

          {/* // ! Diet/Allergy */}
          <div className="md:self-end justify-self-end mt-auto">
            <div className="flex items-center">
              <label>Diet Restrictions:</label>
              {/* // * MAKE ICONS APPEAR DYNAMICALLY */}
              <SmallIcon />
              {/* <img s /> */}
            </div>
            <div>
              <label>Allergy Restrictions:</label>
              {/* // * MAKE ICONS APPEAR DYNAMICALLY */}
            </div>
          </div>
        </div>

        {/* // ! Recipe Image Container */}
        <div className="relative md:flex-1 w-full grow h-[300px] md:h-[420px] lg:h-[500px] xl:h-[500px]">
          <img
            className="rounded-3xl opacity-80 h-full w-full object-cover"
            src={selectedDish.strMealThumb}
            alt={selectedDish.strMeal}
          />
        </div>
      </div>
    </div>
  );
}

export default DishPreview;
