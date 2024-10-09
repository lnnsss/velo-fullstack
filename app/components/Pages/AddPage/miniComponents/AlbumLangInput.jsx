import s from "./../AddPage.module.css";

export function AlbumLangInput() {
  return (
    <div className={`${s.form__point} ${s.form__dateAndLang__point}`}>
      <label
        for="albumLang"
        className={`${s.form__point__title} ${s.form__dateAndLang__point__title}`}
      >
        Язык
      </label>
      <select
        name="albumLang"
        className={`${s.form__point__input} ${s.form__point__input__select}`}
        id="albumLang"
      >
        <option value="ru">Русский</option>
        <option value="en">Английский</option>
      </select>
    </div>
  );
}