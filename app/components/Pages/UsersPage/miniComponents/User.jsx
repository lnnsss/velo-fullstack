import s from "./../UsersPage.module.css";

export function User({ user, openModal }) {
  const userIsAdmin = user.roles.includes("ADMIN");

  return (
    <div className={s.user}>
      <span className={s.username} title={user.username}>
        {user.username}
      </span>
      <div className={s.userMenu}>
        <span className={s.userRole}>{userIsAdmin ? `Admin` : `User`}</span>
        <div className={s.btns}>
          {userIsAdmin ? (
            <DelAdminBtn openModal={openModal} userId={user._id} />
          ) : (
            <AddAdminBtn openModal={openModal} userId={user._id} />
          )}
          <DelUserBtn openModal={openModal} userId={user._id} />
        </div>
      </div>
    </div>
  );
}

function AddAdminBtn({ openModal, userId }) {
  return (
    <button
      className={s.btn}
      title="Назначить администратором"
      onClick={() => openModal({ type: "addAdminModal", userId: userId })}
    >
      +
    </button>
  );
}

function DelAdminBtn({ openModal, userId }) {
  return (
    <button
      className={s.btn}
      title="Отстранить от администрации"
      onClick={() => openModal({ type: "delAdminModal", userId: userId })}
    >
      &#8722;
    </button>
  );
}

function DelUserBtn({ openModal, userId }) {
  return (
    <button
      className={s.btn}
      title="Удалить аккаунт пользователя"
      onClick={() => openModal({ type: "delUserModal", userId: userId })}
    >
      &#215;
    </button>
  );
}
