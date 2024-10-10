import s from "./../AddPage.module.css";

export function AlbumLangInput({ albumLang, handleChangeInputValue }) {
  return (
    <div className={`${s.form__point} ${s.form__dateAndLang__point}`}>
      <label
        htmlFor="albumLang"
        className={`${s.form__point__title} ${s.form__dateAndLang__point__title}`}
      >
        Язык
      </label>
      <select
        name="albumLang"
        className={`${s.form__point__input} ${s.form__point__input__select}`}
        id="albumLang"
        value={albumLang}
        onChange={handleChangeInputValue}
      >
        <option value="Ru">Русский</option>
        <option value="En">Английский</option>
      </select>
    </div>
  );
}
