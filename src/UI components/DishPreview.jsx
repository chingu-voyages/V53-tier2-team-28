import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "./Button.jsx";
import SmallSpinner from "./SmallSpinner.jsx";
import { determineNext7Days } from "../helpers/helperFunctions.jsx";

function DishPreview({ dish }) {
  const { ID } = useParams();
  console.log(ID);

  if (!dish || dish.ID !== ID) return <p>dish not found</p>;

  return (
    <div className="relative p-4">
      {/* dish Title */}
      <h3 className="text-center whitespace-nowrap overflow-hidden mb-2 text-xl font-semibold">
        {dish.title}
      </h3>

      {/* dish Image */}
      <img
        src={dish.imageUrl}
        alt={dish.title}
        className="w-[300px] h-[200px] lg:w-[500px] lg:h-[300px] object-cover text-center p-2 lg:p-5 opacity-65 rounded-3xl"
      />

      {/* Add to Meals Section */}
      <div className="absolute top-12 lg:top-16 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
        <span className="text-sm italic whitespace-nowrap">Add to Meals</span>
        <select
          className="bg-amber-900 italic max-w-[8rem] text-sm p-1 rounded-full transition-all duration-700"
          value={selectedWeekday}
        >
          {[...Array(7)].map((_, i) => (
            <option key={i} value={determineNext7Days(i)}>
              {determineNext7Days(i, !isSelectExpanded)}
            </option>
          ))}
        </select>
        <Button onClick={() => console.log("btn clicked")}>
          {isSelectExpanded ? <SmallSpinner /> : "+"}
        </Button>
      </div>
    </div>
  );
}

export default DishPreview;

// ! copied from other project
// return (
//   <div className="relative">
//     <h3 className="text-center whitespace-nowrap overflow-hidden mb-2">
//       {dish?.title}
//     </h3>
//     <img
//       src={dish.imageUrl}
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
//         <option value={determineNext7Days(0)}>
//           {determineNext7Days(0, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(1)}>
//           {determineNext7Days(1, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(2)}>
//           {determineNext7Days(2, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(3)}>
//           {determineNext7Days(3, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(4)}>
//           {determineNext7Days(4, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(5)}>
//           {determineNext7Days(5, !isSelectExpanded)}
//         </option>
//         <option value={determineNext7Days(6)}>
//           {determineNext7Days(6, !isSelectExpanded)}
//         </option>
//       </select>
//       <Button onClick={()=> console.log('btn clicked')} >
//         {isLoading ? <SmallSpinner /> : "+"}
//       </Button>
//     </div>
//     <div className="absolute bottom-4 lg:bottom-8 right-8 lg:right-12 flex items-center gap-3 bg-stone-500 rounded-lg p-1.5 transition-all duration-700">
//       <span className="text-sm italic">Remove from my dishs </span>
//       <Button
//         onClick={()=> console.log('btn clicked')}
//         additionalClasses="text-2xl"
//
//       >
//         {isLoading ? <SmallSpinner /> : "-"}
//       </Button>
//     </div>
//   </div>
// );
