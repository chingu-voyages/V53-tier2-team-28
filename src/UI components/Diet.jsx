import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";
import Milk from "../assets/allergen-milk.png";
import Eggs from "../assets/allergen-eggs.png";
import Nuts from "../assets/allergen-nuts.png";
import Soybeans from "../assets/allergen-soy.png";

function Diet() {
    return (
        <table className="bg-rose-50 mb-2 flex items-center justify-between">
            <tr><th className="w-1/6 border border-black text-grey-800 text-center text-sm">
            <button><img className="pl-2 pr-2" src={GlutenFree}></img>Gluten Free
            </button></th>
            <th className="w-1/6 border border-black text-grey-800 text-center text-sm">
            <button><img className="pl-2 pr-2" src={Keto}></img>Keto</button></th>
            <th className="w-1/6 border border-black text-grey-800 text-center text-sm">
            <button><img className="pt-2 pl-2 pr-2" src={Mediterranean}></img>Mediterranean
            </button></th>
            <th className="w-1/6 border border-black text-grey-800 text-center text-sm">
            <button><img className="pl-2 pr-2" src={Paleo}></img>Paleo</button></th>
            <th className="w-16 border border-black text-grey-800 text-center text-sm">
            <button><img className="pl-2 pr-2" src={Vegan}></img>Vegan</button></th>
            <th className="w-1/6 border border-black text-grey-800 text-center text-sm">
            <button><img className="pl-2 pr-2" src={Vegetarian}></img>Vegetarian</button>
            </th></tr>
            <tr><td className="w-1/7 border border-black text-grey-800 text-center text-sm">
            <button><img className="p-2" src={Nuts}></img></button>Peanuts/Tree Nuts</td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            <button><img className="p-2" src={Soybeans}></img></button>Soybeans</td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            <button><img className="p-2" src={Milk}></img>Milk</button></td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            Crustacean/Shellfish</td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            Fish</td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            Wheat</td>
            <td className="w-1/7 border border-black border-black text-grey-800 text-center text-xs">
            <button><img className="p-2" src={Eggs}></img>Eggs</button></td></tr>
        </table>
    );
}
export default Diet;