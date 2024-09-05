import { useState } from "react";

export function usePopupManager() {
  const [popupActive, setPopupActive] = useState(false);  // попап
  const [regPopupActive, setRegPopupActive] = useState(false);  // попап регистрации аккаунта
  const [logPopupActive, setLogPopupActive] = useState(false);  // попап входа в аккаунт
  const [buyPopupActive, setBuyPopupActive] = useState(false);  // попап покупки

  const handlePopupClose = () => {
    setPopupActive(false);
    setRegPopupActive(false);
    setLogPopupActive(false);
    setBuyPopupActive(false);
  }; // закрыть попап

  const handleToReg = () => {
    setPopupActive(true);
    setRegPopupActive(true);
    setLogPopupActive(false);
  }; // открыть попап регистрации

  const handleToLog = () => {
    setPopupActive(true);
    setRegPopupActive(false);
    setLogPopupActive(true);
  }; // открыть попап входа

  const handleBuyPopupOpen = () => {
    setPopupActive(true);
    setBuyPopupActive(true);
  }; // открыть попап покупки

  return {
    popupActive,
    regPopupActive,
    logPopupActive,
    buyPopupActive,
    handlePopupClose,
    handleToReg,
    handleToLog,
    handleBuyPopupOpen,
  };
}
