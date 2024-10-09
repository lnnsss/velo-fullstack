import s from "./../AddPage.module.css";

export function AlbumCoverInput() {
  return (
    <div className={s.form__point}>
      <label for="albumCover" className={s.form__point__title}>
        Обложка
      </label>
      <input
        type="file"
        id="albumCover"
        className={`${s.form__point__button} ${s.form__point_button__addCover}`}
      />
    </div>
  );
}
