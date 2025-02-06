import Logo from "../assets/mushroom.svg";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background bg-opacity-85 shadow-md p-4 flex items-center z-50">
      {/* // ! LOGO  */}
      <img className="w-12" src={Logo}></img>
      <div className="ml-4 text-xl font-bold">Logo...</div>
      <p>
        we will likely change color of header and maybe other colors too... to
        match the logo
      </p>
    </header>
  );
}

export default Header;
