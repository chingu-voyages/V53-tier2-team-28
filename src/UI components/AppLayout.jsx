// import FlexibleContent from "./FlexibleContent";
import Footer from "../UI components/Footer";
import Cal from "../UI components/Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function AppLayout() {
  const { employeeDietAndAllergies } = useAllergyDietContext();
  console.log(employeeDietAndAllergies);

  return (
    <>
      {/* // ! EMPLOYEE SELECT TAB  */}
      {/* // ! EMPLOYEE ALLERGIES AND DIET  */}

      <Cal />
      {/* // ! PREVIEW COMPONENT  */}

      <Footer />
    </>
  );
}

export default AppLayout;
