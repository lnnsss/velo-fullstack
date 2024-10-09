import s from "./../AddPage.module.css";

export function AlbumParagraphlistInput() {
  return (
    <div className={s.form__point}>
      <div className={s.form__point__header}>
        <label for="about" className={s.form__point__title}>
          О релизе
        </label>
        <div className={s.form__point__header__counter}>
          <span className={s.header__counter__title}>5 paragraphs</span>
          <button className={s.header__counter__plus}>+</button>
        </div>
      </div>
      <div className={s.form__point__content}>
        <ParagraphInput />
      </div>
    </div>
  );
}

function ParagraphInput() {
  return (
    <div className={s.content__element}>
      <input
        type="text"
        class="content__element__input"
        placeholder="paragraph"
      />
      <button class="content__element__button">-</button>
    </div>
  );
}