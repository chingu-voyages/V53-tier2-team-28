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
    navigate("/");
  }

  const isAnyModalOpen = isOpenModalSignup || isOpenModalLogin;

  // Auto-open modals when navigating to specific routes
  useEffect(() => {
    if (location.pathname === "/login") {
      setIsOpenModalLogin(true);
      setIsOpenModalSignup(false);
    } else if (location.pathname === "/signup") {
      setIsOpenModalSignup(true);
      setIsOpenModalLogin(false);
    } else {
      closeAnyModal();
    }
  }, [location.pathname]);

  function handleCloseAnyModal() {
    if (!isAnyModalOpen) return;
    else {
      closeAnyModal();
      navigate("/");
    }
  }

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
