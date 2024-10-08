import clsx from "clsx";
import { usePopupManager } from "../hooks/usePopUpManager";
import { PopUp } from "./PopUp/PopUp";
import { DelUserPopUp } from "./PopUp/miniComponents/DelUserPopUp";

export function AppLayout({ children }) {
  const { popupActive, handlePopupClose, delUserPopupActive } = usePopupManager();

  return (
    <>
      <div className={clsx("text-slate-900")}>{children}</div>
      <div id="modals">
        {popupActive && (
          <PopUp handlePopupClose={handlePopupClose}>
            {delUserPopupActive && <DelUserPopUp />}
          </PopUp>
        )}
      </div>
    </>
  );
}
