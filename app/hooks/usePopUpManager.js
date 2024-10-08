import { useState } from "react";

export function usePopupManager() {
  const [popupActive, setPopupActive] = useState(false); // попап
  const [delUserPopupActive, setDelUserPopupActive] = useState(false); // попап удаления пользователя

  const handlePopupClose = () => {
    setPopupActive(false);
    setDelUserPopupActive(false);
  }; // закрыть попап

  const handleDelUserPopupOpen = () => {
    setPopupActive(true);
    setDelUserPopupActive(true);
  } // открыть попап удаления пользователя

  return {
    popupActive,
    handlePopupClose,
    delUserPopupActive,
    handleDelUserPopupOpen
  };
}
