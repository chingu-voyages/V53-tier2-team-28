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
    navigate(-1);
  }

  const isAnyModalOpen = isOpenModalSignup || isOpenModalLogin;

  useKeyPress("Escape", () => {
    if (!isAnyModalOpen) return;
    else {
      closeAnyModal();
      navigate("/");
    }
  });

  return (
    <ModalContext.Provider
      value={{
        closeAnyModal,
        isAnyModalOpen,
        isOpenModalLogin,
        isOpenModalSignup,
        setIsOpenModalLogin,
        setIsOpenModalSignup,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
