import clsx from "clsx";
import { PopUp } from "../components/uikit/PopUp/PopUp";
import { RegPopUp } from "../components/uikit/PopUp/miniComponents/RegPopUp";
import { LogPopUp } from "../components/uikit/PopUp/miniComponents/LogPopUp";
import BuyPopUp from "./uikit/PopUp/miniComponents/BuyPopUp";
import { usePopupManager } from "../hooks/usePopupManager";

export function AppLayout({ children }) {
    const {
        popupActive,
        regPopupActive,
        logPopupActive,
        buyPopupActive,
        handlePopupClose,
        handleToReg,
        handleToLog,
    } = usePopupManager();

    return (
        <>
            <div className={clsx("text-slate-900")}>{children}</div>
            <div id="modals">
                {popupActive && (
                    <PopUp handlePopupClose={handlePopupClose}>
                        {regPopupActive && <RegPopUp handleToLog={handleToLog} />}
                        {logPopupActive && <LogPopUp handleToReg={handleToReg} />}
                        {buyPopupActive && <BuyPopUp />}
                    </PopUp>
                )}
            </div>
        </>
    );
}
