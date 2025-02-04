import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";

// ! laura go with these categories:
// const allergyOptions = [
// "Nut Allergy",
// "Gluten Allergy",
// "Soy Allergy",
// "Dairy Allergy",
// "Shellfish Allergy",
//   ];
//

function Diet() {
  return (
    <table className="bg-rose-50 mb-2 flex items-center justify-between">
      <tr>
        <th class="w-1/6 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pl-2 pr-2" src={GlutenFree}></img>Gluten Free
          </button>
        </th>
        <th class="w-1/6 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pl-2 pr-2" src={Keto}></img>Keto
          </button>
        </th>
        <th class="w-1/6 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pt-2 pl-2 pr-2" src={Mediterranean}></img>
            Mediterranean
          </button>
        </th>
        <th class="w-1/6 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pl-2 pr-2" src={Paleo}></img>Paleo
          </button>
        </th>
        <th class="w-16 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pl-2 pr-2" src={Vegan}></img>Vegan
          </button>
        </th>
        <th class="w-1/6 border border-black text-grey-800 text-center text-sm">
          <button>
            <img className="pl-2 pr-2" src={Vegetarian}></img>Vegetarian
          </button>
        </th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  );
}
export default Diet;
