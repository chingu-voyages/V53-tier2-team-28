import { useManagerContext } from "../contexts/ManagerContext";
import Calendar from "./Calendar";
import DietAndAllergies from "./DietAndAllergies";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";

function AppLayout() {
  //  ! ORGANIZE APP LAYOUT AGAIN
  return (
    // ! Main App Container
    <div className="p-20 w-full flex flex-col gap-5 ">
      {/* // ! Employee and Calendar Tabs */}
      <div className="flex items-center justify-between">
        <EmployeeSelect />
      </div>

      {/* // ! add the paragraph - 'select employee to manage their meals' */}

      {/* // *   */}
      <div className="">
        <DietAndAllergies />
        {/* <Allergies /> */}
        <Calendar />
        {/* <DishPreview /> */}
      </div>
    </div>
  );
}
export default AppLayout;
