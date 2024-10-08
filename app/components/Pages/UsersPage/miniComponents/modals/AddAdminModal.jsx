import s from "./../../UsersPage.module.css";

export function AddAdminModal({ closeModal, addAdmin, userId }) {
  return (
    <>
      <span className={s.popupTittle}>
        Уверены что хотите сделать этого пользователя администратором?
      </span>
      <div className={s.popupBtns}>
        <button
          className={`${s.popupBtn} ${s.redBtn}`}
          onClick={() => {
            addAdmin(userId);
            closeModal();
          }}
        >
          Да
        </button>
        <button className={`${s.popupBtn} ${s.greyBtn}`} onClick={closeModal}>
          Нет
        </button>
      </div>
    </>
  );
}
