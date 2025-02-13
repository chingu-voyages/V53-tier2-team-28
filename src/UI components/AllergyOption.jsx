import SmallIcon from "./SmallIcon";

function AllergyOption({ names, icons }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">Allergies</h1>
      <span className="p-2 text-center text-sm flex gap-5 justify-center">
        {Array.isArray(icons) ? (
          icons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <SmallIcon src={icon} />
              </div>
              <span>{names[index]}</span>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <SmallIcon src={icons} />
            </div>
            <span>{names}</span>
          </div>
        )}
      </span>
    </div>
  );
}

export default AllergyOption;
