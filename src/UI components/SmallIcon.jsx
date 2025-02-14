function SmallIcon({ src, label }) {
  return (
    <>
      <label>{label}</label>
      <img src={src} className="h-10 md:h-14 lg:h-20 " />
    </>
  );
}

export default SmallIcon;
