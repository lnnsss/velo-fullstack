import { usePopupManager } from "../../../hooks/usePopUpManager";
import s from "./../PopUp.module.css";

export function DelUserPopUp() {
  const { handlePopupClose } = usePopupManager();

  return (
    <form action="" className={s.form}>
      <span className={s.tittle}>
        Уверены что хотите удалить этого пользователя?
      </span>
      <div className={s.btns}>
        <button className={`${s.formBtn} ${s.redBtn}`}>Удалить</button>
        <button
          className={`${s.formBtn} ${s.greyBtn}`}
          onClick={() => handlePopupClose}
        >
          Нет
        </button>
      </div>
    </form>
  );
}
