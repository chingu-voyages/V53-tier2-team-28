import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import DietOption from "./DietOption";

const dietIcons = {
  GlutenFree,
  Keto,
  Mediterranean,
  Paleo,
  Vegan,
  Vegetarian,
};

function Diet() {
  const { selectedEmployee } = useAllergyDietContext();

  const moreThanOneDietRestriction = selectedEmployee?.diet.length > 1;

  if (!selectedEmployee) return null;

  return (
    <table className="bg-rose-50 mb-2 flex items-center justify-between">
      <tbody>
        <tr>
          <DietOption
            key={selectedEmployee.employeeID}
            names={
              moreThanOneDietRestriction
                ? [...selectedEmployee.diet]
                : selectedEmployee.diet
            }
            // ! either 1 or more icons...
            icons={
              moreThanOneDietRestriction
                ? [...selectedEmployee?.diet].map(
                    (dietCategory) => dietIcons[dietCategory]
                  )
                : dietIcons[selectedEmployee.diet]
            }
          />
        </tr>
      </tbody>
    </table>
  );
}

export default Diet;
