import Logo from "../assets/mushroom.svg";
import CalendarSelect from "./CalendarSelect";

function Header() {
  return (
    <header className="fixed max-h-20 top-0 left-0 w-full bg-background/80 shadow-md p-0 z-50">
      {/* // ! LOGO  */}
      <div className="columns-2 width-full">
        <img className=" w-20 p-4" src={Logo} />
        <div class = "right-0 p-4 place-items-end">
          <CalendarSelect />
        </div>
      </div>

    </header>
  );
}

export default Header;
