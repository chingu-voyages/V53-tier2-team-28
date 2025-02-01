import Cal from "../UI components/Cal";
import Diet from "../UI components/Diet";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import RecipePreview from "./RecipePreview";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <div className="p-20 w-full ">
      <Diet />
      <div className="p-20 w-full">
        <Cal />
        <RecipePreview />
      </div>
    </div>
  );
}

export default AppLayout;
