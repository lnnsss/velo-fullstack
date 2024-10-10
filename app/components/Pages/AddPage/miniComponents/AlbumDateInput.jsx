import s from "./../AddPage.module.css";

export function AlbumDateInput({ albumDate, handleChangeInputValue }) {
  return (
    <div className={`${s.form__point} ${s.form__dateAndLang__point}`}>
      <label
        htmlFor="albumDate"
        className={`${s.form__point__title} ${s.form__dateAndLang__point__title}`}
      >
        Дата релиза
      </label>
      <input
        value={albumDate}
        type="date"
        className={s.form__point__input}
        id="albumDate"
        onChange={handleChangeInputValue}
      />
    </div>
  );
}
