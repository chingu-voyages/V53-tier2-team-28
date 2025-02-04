import { useState } from "react";
import { useManagerContext } from "../contexts/ManagerContext";

import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";
import SmallIcon from "./SmallIcon";

function DishPreview({ dishToPreview }) {
  const [isLoading, setIsLoading] = useState(false);

  const { dietaryOptions } = useManagerContext();
  const iconNames = [GlutenFree, Keto];
  console.log(iconNames);

  // ! fix diet option names and icon names

  // ! loop thru names and match with icon names

  // const iconsToDisplay =
  // // Fake Recipe Data
  const dish = {
    name: "Vegetable Stir Fry",
    ingredients: ["Vanilla", "Bread", "Zucchini", "Parsley"],
    calories: 298,
    dietRestrictions: ["Gluten Free"],
    allergyRestrictions: ["Gluten Allergy"],
    // ! fake image
    imageUrl:
      "https://tse2.mm.bing.net/th?id=OIP.MwazWhKS4ywVTleV0KCkaQHaLH&w=474&h=474&c=7",
  };

  // ! function to determine which icons to display for allergies/diet

  if (isLoading) return <div>Loading...</div>;

  return (
    // ! Main container that holds everything in a row layout with gap between sections
    <div className="bg-background flex justify-center lg:justify-between lg:gap-10 mt-5 lg:mt-8 rounded-xl">
      {/* // ! Container for the recipe image and details, uses flex for responsive layout */}
      <div className="flex flex-col gap-2 md:flex-row items-center lg:items-start p-4 w-full">
        {/* // ! Recipe Details Container:
          - A flex column for displaying the recipe details below the image
          - Adds spacing between elements with `gap-4` and padding with `p-4` */}
        <div className="flex flex-col h-full grow md:flex-1 gap-3 p-4 max-w-[600px] mx-auto lg:mx-0">
          {/* // ! Title/description div */}
          <div className="border-b-2 border-textColor p-4 ">
            {/* // ! Recipe Title */}
            <h1 className="text-center mt-1 text-2xl font-bold">{dish.name}</h1>
            {/* // ! Recipe Description */}
            <p className="text-center">{dish.description}</p>
          </div>
          {/* // ! Ingredients Title */}
          <h3 className="font-semibold text-xl">Ingredients</h3>
          {/* // ! Ingredients List */}
          <ul className="list-disc pl-5">
            {dish.ingredients?.map((ingredient, index) => (
              <li key={index} className="text-textColor">
                {ingredient}
              </li>
            ))}
          </ul>
          {/* // ! Calories */}
          <p className="mt-2 text-textColor">Calories: {dish.calories}</p>

          {/* // ! Diet/Allergy */}
          <div className="self-end justify-self-end mt-auto">
            <div>
              <label>Diet Restrictions:</label>
              {/* // * MAKE ICONS APPEAR DYNAMICALLY */}
              <SmallIcon src={GlutenFree} />
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
            src={dish.imageUrl}
            alt={dish.name}
          />
        </div>
      </div>
    </div>
  );
}

export default DishPreview;
