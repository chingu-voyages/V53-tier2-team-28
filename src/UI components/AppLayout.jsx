import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";
import Week from "./Week";

function AppLayout() {
  // const

  return (
    <div className="p-20 w-full flex flex-col gap-5 ">
      {/* // ! component that has the selected employee name */}

      <EmployeeSelect />
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
