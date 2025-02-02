import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import DishPreview from "./DishPreview";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <div className="p-20 w-full ">
      <Diet />
      <div className="py-20 w-full">
        <Cal />
        <DishPreview />
      </div>
    </div>
  );
}

export default AppLayout;
