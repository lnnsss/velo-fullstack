import s from "./../AddPage.module.css";

export function AlbumDescriptionInput({
  albumDescription,
  setAlbumDescription,
}) {
  const emptyParagraph = {
    id: +new Date(),
    text: "",
  };

  // добавить новый абзац
  const handleAddParagraph = (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    setAlbumDescription([...albumDescription, emptyParagraph]);
  };

  // удалить абзац из списка
  const handleDelParagraph = (id) => (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    const updatedDescription = albumDescription.filter((p) => p.id !== id);
    setAlbumDescription(updatedDescription);
  };

  // изменить текст абзаца
  const handleNameParagraph = (id) => (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    let newText = e.target.value;

    // Создаем новый массив с обновленным текстом абзаца
    const updatedDescription = albumDescription.map((paragraph) => {
      if (paragraph.id === id) {
        return { ...paragraph, text: newText }; // Обновляем текст абзаца
      }
      return paragraph; // Возвращаем остальные абзацы без изменений
    });

    setAlbumDescription(updatedDescription);
  };

  const displayAlbumDescription = albumDescription.map((paragraph) => (
    <ParagraphInput
      key={paragraph.id}
      id={paragraph.id}
      text={paragraph.text}
      handleDelParagraph={handleDelParagraph}
      handleNameParagraph={handleNameParagraph}
    />
  ));

  return (
    <div className={s.form__point}>
      <div className={s.form__point__header}>
        <label htmlFor="about" className={s.form__point__title}>
          О релизе
        </label>
        <div className={s.form__point__header__counter}>
          <span className={s.header__counter__title}>
            {albumDescription.length} paragraphs
          </span>
          <button
            className={s.header__counter__plus}
            onClick={handleAddParagraph}
          >
            +
          </button>
        </div>
      </div>
      {albumDescription.length ? (
        <div className={s.form__point__content}>{displayAlbumDescription}</div>
      ) : null}
    </div>
  );
}

function ParagraphInput({ id, text, handleDelParagraph, handleNameParagraph }) {
  return (
    <div className={s.content__element}>
      <input
        type="text"
        className={s.content__element__input}
        placeholder="paragraph"
        value={text}
        onChange={handleNameParagraph(id)}
      />
      <button
        className={s.content__element__button}
        onClick={handleDelParagraph(id)}
      >
        -
      </button>
    </div>
  );
}
