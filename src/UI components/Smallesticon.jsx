function SmallestIcon({ src, label }) {
  return (
    <>
      <label>{label}</label>
      <img src={src} className="h-2 md:h-4 lg:h-6 " />
    </>
  );
}

export default SmallestIcon;
