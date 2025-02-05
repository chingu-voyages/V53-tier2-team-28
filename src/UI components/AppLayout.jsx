import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import CalendarSelect from "./CalendarSelect";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";
import Week from "./Week";

function AppLayout() {
  // const

  //  ! ORGANIZE APP LAYOUT AGAIN
  return (
    <div className="p-20 w-full flex flex-col gap-5 ">
      {/* // ! component that has the selected employee name */}

      <EmployeeSelect />

      <CalendarSelect />
      {/* // ! add the paragraph - 'select employee to manage their meals' */}

      {/* // *   */}
      <div className="">
        <Diet />
        <Week />
        {/* <Cal /> */}
        <DishPreview />
      </div>
    </div>
  );
}

export default AppLayout;
