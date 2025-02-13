function PreviewIcons({ iconsArray }) {
  if (!iconsArray) return;

  return (
    <>
      {iconsArray.map((iconObj, i) => (
        <div className="relative group" key={i}>
          <img
            src={iconObj.icon}
            alt={iconObj.name}
            className="h-6 md:h-12 lg:h-12"
          />
          {/* Hidden name that appears on hover */}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-textColor-lightText text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:bottom-14 transition-all">
            {iconObj.name}
          </span>
        </div>
      ))}
    </>
  );
}

export default PreviewIcons;
