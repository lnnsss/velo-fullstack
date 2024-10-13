import s from "./../AddPage.module.css";

export function AlbumTracklistInput({ albumTracklist, setAlbumTracklist }) {
  const emptyTrack = {
    id: +new Date(),
    trackTitle: "",
    feats: [],
  };

  // добавить новый трек
  const handleAddTrack = (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    setAlbumTracklist([...albumTracklist, emptyTrack]);
  };

  // удалить трек из треклиста
  const handleDelTrack = (id) => (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    const updatedTracklist = albumTracklist.filter((track) => track.id !== id);
    setAlbumTracklist(updatedTracklist);
  };

  // изменить название трека
  const handleNameTrack = (id) => (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы
    let newName = e.target.value;

    // Создаем новый массив с обновленным названием трека
    const updatedTracklist = albumTracklist.map((track) => {
      if (track.id === id) {
        return { ...track, trackTitle: newName }; // Обновляем название трека
      }
      return track; // Возвращаем остальные треки без изменений
    });

    setAlbumTracklist(updatedTracklist);
  };

  const displayAlbumParagraphlist = albumTracklist.map((track) => (
    <TrackInput
      key={track.id}
      id={track.id}
      trackTitle={track.trackTitle}
      handleDelTrack={handleDelTrack}
      handleNameTrack={handleNameTrack}
    />
  ));

  return (
    <div className={s.form__point}>
      <div className={s.form__point__header}>
        <label htmlFor="tracklist" className={s.form__point__title}>
          Треклист
        </label>
        <div className={s.form__point__header__counter}>
          <span className={s.header__counter__title}>
            {albumTracklist.length} tracks
          </span>
          <button className={s.header__counter__plus} onClick={handleAddTrack}>
            +
          </button>
        </div>
      </div>
      {albumTracklist.length ? (
        <div className={s.form__point__content}>
          {displayAlbumParagraphlist}
        </div>
      ) : null}
    </div>
  );
}

function TrackInput({ id, trackTitle, handleDelTrack, handleNameTrack }) {
  return (
    <div className={s.content__element}>
      <input
        type="text"
        className={s.content__element__input}
        placeholder="title"
        value={trackTitle}
        onChange={handleNameTrack(id)}
      />
      <button className={s.content__element__button} onClick={handleDelTrack(id)}>
        -
      </button>
    </div>
  );
}
