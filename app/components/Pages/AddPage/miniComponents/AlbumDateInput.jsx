import s from "./../AddPage.module.css";

export function AlbumDateInput() {
  return (
    <div className={`${s.form__point} ${s.form__dateAndLang__point}`}>
      <label
        for="albumDate"
        className={`${s.form__point__title} ${s.form__dateAndLang__point__title}`}
      >
        Дата релиза
      </label>
      <input type="date" className={s.form__point__input} id="albumDate" />
    </div>
  );
}
