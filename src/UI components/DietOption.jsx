import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import SmallIcon from "./SmallIcon";

function DietOption({ names, icons }) {
  const { selectedEmployee } = useAllergyDietContext();

  return (
    <th className="w-48 border border-textColor text-center text-sm flex gap-5">
      {/* // ! multiple diet restrictions */}
      {Array.isArray(icons) ? (
        icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <SmallIcon src={icon} /> <span>{names[index]}</span>
          </div>
        ))
      ) : (
        <div>
          {/* // ! one diet restriction */}
          <SmallIcon src={icons} /> <span>{names}</span>
        </div>
      )}
    </th>
  );
}

export default DietOption;
