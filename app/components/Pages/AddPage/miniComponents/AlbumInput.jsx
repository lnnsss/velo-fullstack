import s from "./../AddPage.module.css";

export function AlbumInput({
  id,
  labelValue,
  placeholderValue,
  inputValue,
  handleChangeInputValue,
}) {
  return (
    <div className={s.form__point}>
      <label htmlFor={id} className={s.form__point__title}>
        {labelValue}
      </label>
      <input
        type="text"
        className={s.form__point__input}
        id={id}
        placeholder={placeholderValue}
        value={inputValue}
        onChange={handleChangeInputValue}
      />
    </div>
  );
}
