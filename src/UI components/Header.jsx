import Logo from "../assets/mushroom.svg";
import CalendarSelect from "./CalendarSelect";
import { useManagerContext } from "../contexts/ManagerContext";

function Header() {
  //console.log(useManagerContext())
  const { isManagerLoggedIn } = useManagerContext();
  console.log(isManagerLoggedIn);
  return (
    <header className="fixed flex justify-between items-center max-h-20 top-0 left-0 w-full bg-background/80 shadow-md p-0 px-4 z-50">
      {/* // ! LOGO  */}
      <div className="columns-2 width-full">
        <img className=" w-20 p-4" src={Logo} />
      </div>

      <p className="italic">{isManagerLoggedIn && "Manager Logged in"}</p>

      <div class="p-4">
        <CalendarSelect />
      </div>
    </header>
  );
}

export default Header;
