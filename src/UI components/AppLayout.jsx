import { useManagerContext } from "../contexts/ManagerContext";
import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import CalendarSelect from "./CalendarSelect";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";
import Week from "./Week";

function AppLayout() {
  const { weeklyOrMonthly } = useManagerContext();

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
        <Diet />
        {weeklyOrMonthly === "Weekly" ? <Week /> : <Cal />}
        <DishPreview />
      </div>
    </div>
  );
}

export default AppLayout;
