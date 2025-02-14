import { createContext, useContext, useEffect, useState } from "react";
import { useKeyPress } from "../helpers/useKeyPress";
import { useLocation, useNavigate } from "react-router-dom";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalSignup, setIsOpenModalSignup] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function closeAnyModal() {
    setIsOpenModalLogin(false);
    setIsOpenModalSignup(false);
  }

  const isAnyModalOpen = isOpenModalSignup || isOpenModalLogin;

  // Prevent navigate from triggering unnecessary redirects
  function handleCloseAnyModal() {
    if (!isAnyModalOpen) return;

    // Only navigate if there's a modal open and we're closing it
    closeAnyModal();
    if (isOpenModalLogin || isOpenModalSignup) {
      navigate("/"); // Only navigate back if a modal was truly closed
    }
  }

  // ! MANUALLY GO TO PATH LOGIN OR SIGNUP - DOESN'T WORK
  // useEffect(() => {
  //   if (location.pathname === "/login" && !isOpenModalLogin) {
  //     setIsOpenModalLogin(true);
  //     setIsOpenModalSignup(false);
  //   } else if (location.pathname === "/signup" && !isOpenModalSignup) {
  //     setIsOpenModalSignup(true);
  //     setIsOpenModalLogin(false);
  //   } else {
  //     closeAnyModal(); // Close modals if not on login/signup page
  //   }
  // }, [location.pathname, isOpenModalLogin, isOpenModalSignup]);

  useKeyPress("Escape", handleCloseAnyModal);

  return (
    <ModalContext.Provider
      value={{
        isAnyModalOpen,
        isOpenModalLogin,
        isOpenModalSignup,
        setIsOpenModalLogin,
        setIsOpenModalSignup,
        handleCloseAnyModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
