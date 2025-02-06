import Logo from "../assets/mushroom.svg";
<<<<<<< HEAD
=======
import Mushroom from "../assets/mushroom.svg";
>>>>>>> b274fe9cdb4381b9b70e2027c6bca2c2e349e8ed

function Header() {
  return (
    <header className="fixed max-h-20 top-0 left-0 w-full bg-background/80 shadow-md p-4 flex items-center z-50">
      {/* // ! LOGO  */}
<<<<<<< HEAD
      <img className="w-12" src={Logo}></img>
      <div className="ml-4 text-xl font-bold">Logo...</div>
=======
      <div>
        <img className="w-1/5" src={Logo} />
      </div>
>>>>>>> b274fe9cdb4381b9b70e2027c6bca2c2e349e8ed
      <p>
        we will likely change color of header and maybe other colors too... to
        match the logo
      </p>
      <p>Manager Logged In</p>
    </header>
  );
}

export default Header;
