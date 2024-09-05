import s from "./PopUp.module.css";
import { PopupBg } from "./miniComponents/PopupBg";

export function PopUp({ children, handlePopupClose }) {
  return (
    <>
      {/* Заблюренный бекграунд */}
      <PopupBg
        onClick={() => {
          handlePopupClose();
        }}
      />

      {/* Попап (модалка) */}
      <div className={s.popup}>{children}</div>
    </>
  );
}


