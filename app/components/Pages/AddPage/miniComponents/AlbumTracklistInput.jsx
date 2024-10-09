import s from "./../AddPage.module.css";

export function AlbumTracklistInput() {
  return (
    <div className={s.form__point}>
      <div className={s.form__point__header}>
        <label for="tracklist" className={s.form__point__title}>
          Треклист
        </label>
        <div className={s.form__point__header__counter}>
          <span className={s.header__counter__title}>5 tracks</span>
          <button className={s.header__counter__plus}>+</button>
        </div>
      </div>
      <div className={s.form__point__content}>
        <TrackInput />
      </div>
    </div>
  );
}

function TrackInput() {
  return (
    <div className={s.content__element}>
      <input type="text" class="content__element__input" placeholder="title" />
      <button class="content__element__button">-</button>
    </div>
  );
}