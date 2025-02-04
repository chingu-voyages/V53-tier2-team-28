import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import DishPreview from "./DishPreview";
import EmployeeSelect from "./EmployeeSelect";
import Week from "./Week";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <div className="p-20 w-full flex flex-col gap-5 ">
      {/* // ! component that has the selected employee name */}
      <EmployeeSelect />

      <Diet />
      <div className="w-full">
        {/* // ! started working with weekly calendar */}
        <Week />
        {/* <Cal /> */}
        <DishPreview />
      </div>
    </div>
  );
}

export default AppLayout;
