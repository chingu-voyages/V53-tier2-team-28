import { createContext, useContext, useState } from "react";
import { useKeyPress } from "../helpers/useKeyPress";
import { useNavigate } from "react-router-dom";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalSignup, setIsOpenModalSignup] = useState(false);

  const navigate = useNavigate();

  function closeAnyModal() {
    setIsOpenModalLogin(false);
    setIsOpenModalSignup(false);
    navigate("/");
  }

  const isAnyModalOpen = isOpenModalSignup || isOpenModalLogin;

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
