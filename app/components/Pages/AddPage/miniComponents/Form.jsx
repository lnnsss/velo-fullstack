import { useState } from "react";
import s from "./../AddPage.module.css";
import { AlbumDateInput } from "./AlbumDateInput";
import { AlbumInput } from "./AlbumInput";
import { AlbumLangInput } from "./AlbumLangInput";
import { AlbumDescriptionInput } from "./AlbumDescriptionInput";
import { AlbumTracklistInput } from "./AlbumTracklistInput";

export function Form() {
  const [albumTitle, setAlbumTitle] = useState(""); // название
  const [albumArtist, setAlbumArtist] = useState(""); // артист
  const [albumPrice, setAlbumPrice] = useState(""); // цена
  const [albumCoverLink, setAlbumCoverLink] = useState(""); // ссылка на обложку
  const [albumYandexLink, setAlbumYandexLink] = useState(""); // ссылка на яндекс
  const [albumDate, setAlbumDate] = useState(""); // дата релиза
  const [albumLang, setAlbumLang] = useState(""); // язык
  const [albumTracklist, setAlbumTracklist] = useState([]); // треклист *
  const [albumDescription, setAlbumDescription] = useState([]); // о релизе *

  // универсальная функция изменения состояния в инпутах
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <form action="" className={s.addPage__form}>
      <AlbumInput
        key={"albumTitle"}
        id={"albumTitle"}
        labelValue={"Название"}
        placeholderValue={"WILD EA$T"}
        inputValue={albumTitle}
        handleChangeInputValue={handleChange(setAlbumTitle)}
      />
      <AlbumInput
        key={"albumArtist"}
        id={"albumArtist"}
        labelValue={"Артист"}
        placeholderValue={"SALUKI"}
        inputValue={albumArtist}
        handleChangeInputValue={handleChange(setAlbumArtist)}
      />
      <AlbumInput
        key={"albumPrice"}
        id={"albumPrice"}
        labelValue={"Цена ($)"}
        placeholderValue={"50"}
        inputValue={albumPrice}
        handleChangeInputValue={handleChange(setAlbumPrice)}
      />
      <AlbumInput
        key={"albumCoverLink"}
        id={"albumCoverLink"}
        labelValue={"Ссылка на обложку альбома"}
        placeholderValue={"link"}
        inputValue={albumCoverLink}
        handleChangeInputValue={handleChange(setAlbumCoverLink)}
      />
      <AlbumInput
        key={"albumYandexLink"}
        id={"albumYandexLink"}
        labelValue={"Ссылка на яндекс музыку (при наличии)"}
        placeholderValue={"link"}
        inputValue={albumYandexLink}
        handleChangeInputValue={handleChange(setAlbumYandexLink)}
      />
      <div className={s.form__dateAndLang}>
        <AlbumDateInput
          albumDate={albumDate}
          handleChangeInputValue={handleChange(setAlbumDate)}
        />
        <AlbumLangInput
          albumLang={albumLang}
          handleChangeInputValue={handleChange(setAlbumLang)}
        />
      </div>
      <AlbumTracklistInput
        albumTracklist={albumTracklist}
        setAlbumTracklist={setAlbumTracklist}
      />
      <AlbumDescriptionInput
        albumDescription={albumDescription}
        setAlbumDescription={setAlbumDescription}
      />
      <button type="submit" className={s.form__button}>
        Добавить
      </button>
    </form>
  );
}
