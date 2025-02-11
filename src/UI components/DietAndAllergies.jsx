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
  console.log(selectedEmployee);

  return (
    <section className="flex gap-5">
      {/* // ! DIET ICONS */}
      <table className="bg-rose-50 mb-2">
        <tbody>
          <tr>
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
          </tr>
        </tbody>
      </table>

      {/* // ! ALLERGY ICONS */}
      {selectedEmployee.allergies.length > 0 && (
        <table className="bg-rose-50 mb-2">
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
}

export default DietAndAllergies;
