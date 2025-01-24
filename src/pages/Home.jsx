import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useModalContext } from "../UI components/useModalContext";
import { capitalize } from "../helpers/helperFunctions.jsx";
import Button from "../UI components/Button.jsx";
// import { logOutOfAccount } from "../features/accountsSlice";

function Home() {
  // const { 'bogdan' } = useSelector((store) => store.accounts);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const {
  //   isOpenModalLoginC,
  //   isOpenModalLoginA,
  //   isOpenModalSignup,
  //   setIsOpenModalLoginC,
  //   setIsOpenModalLoginA,
  //   setIsOpenModalSignup,
  // } = useModalContext();

  // useEffect(() => {
  //   if (isOpenModalLoginA) {
  //     navigate("/loginAdmin");
  //   }
  // }, [isOpenModalLoginA, navigate]);

  // useEffect(() => {
  //   if (isOpenModalLoginC) {
  //     navigate("/loginemployee");
  //   }
  // }, [isOpenModalLoginC, navigate]);

  // useEffect(() => {
  //   if (isOpenModalSignup) {
  //     navigate("/signup");
  //   }
  // }, [isOpenModalSignup, navigate]);

  // function logOut() {
  //   const confirmLogout = confirm("Are you sure?");
  //   setTimeout(() => {
  //     if (confirmLogout === true) dispatch(logOutOfAccount());
  //   }, 1000);
  // }

  let currentAccount; // Initialize currentAccount
  // ! fake admin
  // currentAccount.typeOfUser = "admin";

  // ! fake employee
  // currentAccount.typeOfUser = "employee";

  return (
    // ! MAIN CONTAINER
    <div className="flex flex-col justify-between w-full min-h-screen p-14 bg-backgroundImage bg-cover bg-fixed bg-bottom h-full">
      {/* // ! Check if the user is logged in */}
      {currentAccount ? (
        <>
          {/* // ! If the user is an admin, show this message */}
          {currentAccount.typeOfUser === "admin" && (
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
            <Button
            // onClick={logOut}
            >
              LOGOUT
            </Button>
          </div>
        </>
      ) : (
        <div className="grow h-full flex flex-col items-center sm:items-start justify-between">
          {/* // ! New employee section */}
          <div className="flex flex-col gap-4 mb-8 items-center">
            <h2 className="text-2xl text-textColor">
              Set your food preferences?
            </h2>
            <Button onClick={() => setIsOpenModalSignup(true)}>SIGNUP</Button>
          </div>
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

          {/* // ! Admin login section  */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-textColor">Manage weekly meals </h2>
            <Button onClick={() => setIsOpenModalLoginA(true)}>
              MANAGER LOGIN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
