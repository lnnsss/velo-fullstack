import s from "./../../UsersPage.module.css";

export function DelAdminModal({ closeModal }) {
  return (
    <>
      <span className={s.popupTittle}>
        Уверены что хотите лишить этого пользователя прав администратора?
      </span>
      <div className={s.popupBtns}>
        <button className={`${s.popupBtn} ${s.redBtn}`}>Да</button>
        <button className={`${s.popupBtn} ${s.greyBtn}`} onClick={closeModal}>
          Нет
        </button>
      </div>
    </>
  );
}
