import Logo from "../assets/mushroom.svg";

function Header() {
  return (
    <header className="fixed max-h-20 top-0 left-0 w-full bg-background/80 shadow-md p-4 flex items-center z-50">
      {/* // ! LOGO  */}
      <div>
        <img className="w-1/5" src={Logo} />
      </div>
      <p>
        we will likely change color of header and maybe other colors too... to
        match the logo
      </p>
      <p>Manager Logged In</p>
    </header>
  );
}

export default Header;
