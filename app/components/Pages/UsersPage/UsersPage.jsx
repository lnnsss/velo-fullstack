import s from "./UsersPage.module.css";

export function UsersPage({ currentTheme }) {

  return (
      <div className={`${s.usersPage} ${currentTheme && `${s.nightTheme}`}`}>
        <div className={s.pa1}>
          <div className={s.pa1_container}>
            <h2 className={s.tittle}>Пользователи</h2>
          </div>
        </div>
      </div>
  );
}