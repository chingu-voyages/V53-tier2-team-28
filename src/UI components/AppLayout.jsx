// import FlexibleContent from "./FlexibleContent";
import Footer from "../UI components/Footer";
import Cal from "../UI components/Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <>
      <Cal />
    </>
  );
}

export default AppLayout;
