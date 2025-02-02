import Cal from "../UI components/Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import RecipePreview from "./DishPreview";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <div className="p-20 w-full">
      <Cal />
      <RecipePreview />
    </div>
  );
}

export default AppLayout;
