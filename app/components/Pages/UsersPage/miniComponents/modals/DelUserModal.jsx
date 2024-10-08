import s from "./../../UsersPage.module.css";

export function DelUserModal({ closeModal, deleteUserById, userId }) {
  return (
    <>
      <span className={s.popupTittle}>
        Уверены что хотите удалить этого пользователя?
      </span>
      <div className={s.popupBtns}>
        <button
          className={`${s.popupBtn} ${s.redBtn}`}
          onClick={() => {
            deleteUserById(userId);
            closeModal();
          }}
        >
          Удалить
        </button>
        <button className={`${s.popupBtn} ${s.greyBtn}`} onClick={closeModal}>
          Нет
        </button>
      </div>
    </>
  );
}
