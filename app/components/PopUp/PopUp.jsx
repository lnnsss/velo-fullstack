import s from "./PopUp.module.css";
import { PopupBg } from "./miniComponents/PopupBg";

export function PopUp({ children, handlePopupClose }) {
  return (
    <>
      <PopupBg
        onClick={() => {
          handlePopupClose();
        }}
      />

      <div className={s.popup}>{children}</div>
    </>
  );
}
