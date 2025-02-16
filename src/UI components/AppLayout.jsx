import { useManagerContext } from "../contexts/ManagerContext";
import Calendar from "./Calendar";
import DietAndAllergies from "./DietAndAllergies";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import { useState } from "react";

function AppLayout() {
  const { selectedEmployee } = useAllergyDietContext();

  return (
    // ! Main App Container
    <div className="p-20 w-full flex flex-col gap-5 ">
      {/* // ! Employee and Calendar Tabs */}
      {!selectedEmployee && (
        <h1
          onClick={() => {}}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Select an employee to plan their meals!
        </h1>
      )}
      <div className="flex items-center justify-between">
        <EmployeeSelect />
      </div>

      {selectedEmployee && (
        // ! when employee is selected
        <div className="">
          <DietAndAllergies />
          <Calendar />
          <DishPreview />
        </div>
      )}
 
    <div class="text-center sm:text-left"></div>
    </div>
  );
}
export default AppLayout;
