import { useNavigate } from "react-router-dom";
import { useModalContext } from "../contexts/ModalContext.jsx";
import { capitalize } from "../helpers/helperFunctions.jsx";
import Button from "../UI components/Button.jsx";
import Section from "../UI components/Section.jsx";
import Footer from "../UI components/Footer.jsx";

function Home() {
  let currentAccount; // Initialize currentAccount
  // ! fake manager
  // currentAccount.typeOfUser = "manager";

  // ! fake employee
  // currentAccount.typeOfUser = "employee";

  const navigate = useNavigate();

  const { setIsOpenModalLogin, setIsOpenModalSignup } = useModalContext();

  function handleLogin() {
    setIsOpenModalLogin(true);
    navigate("/login");
  }

  function handleSignup() {
    setIsOpenModalSignup(true);
    navigate("/signup");
  }

  return (
    // ! MAIN CONTAINER
    <>
      <div className="flex flex-col justify-between w-full min-h-screen p-14 bg-backgroundImage bg-cover bg-fixed bg-bottom h-full">
        {/* // ! Check if the user is logged in */}
        {currentAccount ? (
          <>
            {/* // ! If the user is an manager, show this message */}
            {currentAccount.typeOfUser === "manager" && (
              <h2 className="text-2xl font-bold text-textColor">Manage</h2>
            )}
            {/* // ! If the user is a employee, show this message */}
            {currentAccount.typeOfUser === "employee" && (
              <h2 className="text-2xl font-bold text-textColor">
                Want to change your preferences, {capitalize(currentAccount)}?
              </h2>
            )}

            {/* // ! User information and logout button */}
            <div className="absolute top-8 right-12 flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-textColor">
                {capitalize(currentAccount)}
              </h3>
              <Button>LOGOUT</Button>
            </div>
          </>
        ) : (
          <div className="grow h-full flex flex-col items-center sm:items-start justify-between">
            {/* // ! New employee section */}
            <Section
              title="Set your food preferences?"
              buttonText="SIGNUP"
              onClick={handleSignup}
            />
            {/* // ! Welcome screen */}
            <div className="flex flex-col self-center items-center gap-4 mb-8">
              <h1 className="text-4xl font-bold text-center text-textColor">
                NAME OF COMPANY....
              </h1>
              <h2 className="text-2xl text-center text-textColor max-w-[55vw]">
                the company that takes care of your well-being, as well as your
                bank account! 🍏💰
              </h2>
            </div>

            {/* // ! manager login section  */}
            <Section
              title="Manage weekly meals"
              buttonText="MANAGER LOGIN"
              onClick={handleLogin}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
