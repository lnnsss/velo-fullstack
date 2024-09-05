import s from "./../PopUp.module.css";

export function RegPopUp({ handleToLog }) {
  return (
    <form action="" className={s.form}>
      <h3 className={s.tittle}>Регистрация</h3>
      <label htmlFor="login" className={s.formLabel}>
        Логин
      </label>
      <input type="text" placeholder="ronaldo7" className={s.formInput} />
      <label htmlFor="password" className={s.formLabel}>
        Пароль
      </label>
      <input type="password" placeholder="qwerty123" className={s.formInput} />
      <button
        className={s.toLog}
        onClick={() => {
          handleToLog();
        }}
      >
        Уже есть аккаунт?
      </button>
      <button className={s.formBtn}>Зарегистрироваться</button>
    </form>
  );
}
