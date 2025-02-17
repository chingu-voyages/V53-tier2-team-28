import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";
import NutAllergy from "../assets/allergen-nuts.png";
import GlutenAllergy from "../assets/allergen-wheat.png";
import DairyAllergy from "../assets/allergen-milk.png";
import ShellfishAllergy from "../assets/allergen-fish.png";
import SoyAllergy from "../assets/allergen-soy.png";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import AllergyOption from "./AllergyOption";
import DietOption from "./DietOption";

const dietIcons = {
  GlutenFree,
  Keto,
  Mediterranean,
  Paleo,
  Vegan,
  Vegetarian,
};

const allergyIcons = {
  NutAllergy,
  DairyAllergy,
  ShellfishAllergy,
  SoyAllergy,
  GlutenAllergy,
};

function DietAndAllergies() {
  const { selectedEmployee } = useAllergyDietContext();

  if (!selectedEmployee) return null;

  const multipleDietRestrictions = selectedEmployee.diet.length > 1;
  const multipleAllergyRestrictions = selectedEmployee.allergies.length > 1;

  return (
    <section className=" flex gap-5 lg:gap-10 justify-self-center sm:justify-self-start mb-4 md:mb-10">
      {/* // ! DIET ICONS */}
      <table className="bg-background mb-2 rounded-lg">
        <tbody>
          <tr>
            <td className="p-2">
              <DietOption
                key={selectedEmployee.employeeID}
                names={
                  multipleDietRestrictions
                    ? [...selectedEmployee.diet]
                    : selectedEmployee.diet
                }
                icons={
                  multipleDietRestrictions
                    ? selectedEmployee.diet.map(
                        (dietCategory) => dietIcons[dietCategory]
                      )
                    : dietIcons[selectedEmployee.diet]
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* // ! ALLERGY ICONS */}
      <table className="bg-background mb-2 rounded-lg">
        <tbody>
          <tr>
            <td className="p-2">
              <AllergyOption
                key={selectedEmployee.employeeID}
                names={
                  multipleAllergyRestrictions
                    ? [...selectedEmployee.allergies]
                    : selectedEmployee.allergies
                }
                icons={
                  multipleAllergyRestrictions
                    ? selectedEmployee.allergies.map(
                        (allergyCategory) => allergyIcons[allergyCategory]
                      )
                    : allergyIcons[selectedEmployee.allergies]
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default DietAndAllergies;
