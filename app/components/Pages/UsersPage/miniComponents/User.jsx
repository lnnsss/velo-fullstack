import { usePopupManager } from "../../../../hooks/usePopUpManager";
import s from "./../UsersPage.module.css";

export function User({ user }) {
  const { handleDelUserPopupOpen } = usePopupManager();
  const userIsAdmin = user.roles.includes("ADMIN");

  return (
    <div className={s.user}>
      <span className={s.username} title={user.username}>
        {user.username}
      </span>
      <div className={s.userMenu}>
        <span className={s.userRole}>{userIsAdmin ? `Admin` : `User`}</span>
        <div className={s.btns}>
          {userIsAdmin ? <DelAdminBtn /> : <AddAdminBtn />}
          <DelUserBtn handleDelUserPopupOpen={handleDelUserPopupOpen} />
        </div>
      </div>
    </div>
  );
}

function AddAdminBtn() {
  return (
    <button className={s.btn} title="Назначить администратором">
      +
    </button>
  );
}

function DelAdminBtn() {
  return (
    <button className={s.btn} title="Отстранить от администрации">
      &#8722;
    </button>
  );
}

function DelUserBtn({ handleDelUserPopupOpen }) {
  return (
    <button
      className={s.btn}
      title="Удалить аккаунт пользователя"
      onClick={() => handleDelUserPopupOpen()}
    >
      &#215;
    </button>
  );
}