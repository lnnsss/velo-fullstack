import s from "./../PopUp.module.css";

export function PopupBg({ onClick }) {
  return <div className={s.popupBg} onClick={onClick} />;
}
