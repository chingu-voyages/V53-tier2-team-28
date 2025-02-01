// import FlexibleContent from "./FlexibleContent";
import Footer from "../UI components/Footer";
import Cal from "../UI components/Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <div className="p-20 w-full max-h-[85vh]">
      <Cal />
    </div>
  );
}

export default AppLayout;
