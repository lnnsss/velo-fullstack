import s from "./../AddPage.module.css";

export function AlbumInput({ id, labelValue, placeholderValue }) {
  return (
    <div className={s.form__point}>
      <label for={id} className={s.form__point__title}>
        {labelValue}
      </label>
      <input
        type="text"
        className={s.form__point__input}
        id={id}
        placeholder={placeholderValue}
      />
    </div>
  );
}
