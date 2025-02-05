function DietOption({ name, icons }) {
  const multipleIcons = Array.isArray(icons);

  if (!multipleIcons)
    return (
      <th className="w-1/6 border border-textColor text-center text-sm">
        <div>
          <img className="px-8" src={icons} alt={name} />
          {name}
        </div>
      </th>
    );

  // ! if multiple icons
  return (
    <th className="w-1/6 border border-textColor text-center text-sm">
      {icons.map((icon) => {
        console.log(icon);
        return (
          <div key={icon} className="">
            <img className="px-8" src={icon} alt={name} />
            {name}
          </div>
        );
      })}
    </th>
  );
}
export default DietOption;
