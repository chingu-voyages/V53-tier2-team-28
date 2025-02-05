import Logo from "../assets/mushroom.svg"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background bg-opacity-85 shadow-md p-4 flex items-center z-50">
      {/* // ! LOGO  */}
      <img className= "w-1/3">{Logo}</img>
      <p>
        we will likely change color of header and maybe other colors too... to
        match the logo
      </p>
      <p>Manager Logged In</p>
    </header>
  );
}

export default Header;
