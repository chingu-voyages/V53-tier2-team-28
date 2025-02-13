function SmallestIcon({ iconsArray }) {
  if (!iconsArray) return;
  return (
    <>
      {iconsArray.map((iconObj, i) => (
        <div className="relative group" key={i}>
          <img
            src={iconObj.icon}
            alt={iconObj.name}
            className="h-4 md:h-6 lg:h-8"
          />
          {/* Hidden name that appears on hover */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-textColor-lightText text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all">
            {iconObj.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default SmallestIcon;
