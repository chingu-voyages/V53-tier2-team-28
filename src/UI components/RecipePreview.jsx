import { useParams } from "react-router-dom";

function RecipePreview({ recipe }) {
  const { id } = useParams();
  console.log(recipe);

  // const recipeID = recipe.id === id ;

  if (!recipe) return <p>Recipe not found</p>;

  return <div>{recipe.name}</div>;
}

export default RecipePreview;

// ! copied from other project
// return (
//   <div className="relative">
//     <h3 className="text-center whitespace-nowrap overflow-hidden mb-2">
//       {recipe?.title}
//     </h3>
//     <img
//       src={recipe.imageUrl}
//       className=" w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] object-cover text-center p-2 lg:p-5 opacity-65 rounded-3xl "
//     ></img>
//     <div className="absolute top-12 lg:top-16 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
//       <span className="text-sm italic whitespace-nowrap">Add to Meals</span>

//       <select
//         className={` bg-amber-900 italic  max-w-[8rem] text-sm p-1 rounded-full transition-all duration-700 `}
//         onFocus={() => setIsSelectExpanded(true)}
//         onBlur={() => setIsSelectExpanded(false)}
//         value={selectedWeekday}
//         onChange={(e) => setSelectedWeekday(e.target.value)}
//       >
//         <option value={next7Days(0)}>
//           {next7Days(0, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(1)}>
//           {next7Days(1, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(2)}>
//           {next7Days(2, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(3)}>
//           {next7Days(3, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(4)}>
//           {next7Days(4, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(5)}>
//           {next7Days(5, !isSelectExpanded)}
//         </option>
//         <option value={next7Days(6)}>
//           {next7Days(6, !isSelectExpanded)}
//         </option>
//       </select>
//       <Button onClick={handleAddToMeals} type="round">
//         {isLoading ? <SmallSpinner /> : "+"}
//       </Button>
//     </div>
//     <div className="absolute bottom-4 lg:bottom-8 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
//       <span className="text-sm italic">Remove from my recipes </span>
//       <Button
//         onClick={handleDeleteRecipe}
//         additionalClasses="text-2xl"
//         type="round"
//       >
//         {isLoading ? <SmallSpinner /> : "-"}
//       </Button>
//     </div>
//   </div>
// );
