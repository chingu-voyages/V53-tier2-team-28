import GlutenFree from "../assets/gluten-free.png";
import Keto from "../assets/keto.png";
import Mediterranean from "../assets/mediterranean.png";
import Paleo from "../assets/paleo.png";
import Vegan from "../assets/vegan.png";
import Vegetarian from "../assets/vegetarian.png";

function Diet() {
    return (
        <div className="bg-rose-50 border border-black flex items-center justify-between">
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={GlutenFree}></img>Gluten Free</div>
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={Keto}></img>Keto</div>
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={Mediterranean}></img>Mediterranean</div>
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={Paleo}></img>Paleo</div>
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={Vegan}></img>Vegan</div>
            <div class="w-full border border-black text-grey-800 text-center flex items-center">
            <img className="w-1/2 p-2" src={Vegetarian}></img>Vegetarian</div>
        </div>
    );
}
export default Diet;