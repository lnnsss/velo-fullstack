import { useState } from "react";
import s from "./../AddPage.module.css";
import { AlbumDateInput } from "./AlbumDateInput";
import { AlbumInput } from "./AlbumInput";
import { AlbumLangInput } from "./AlbumLangInput";
import { AlbumDescriptionInput } from "./AlbumDescriptionInput";
import { AlbumTracklistInput } from "./AlbumTracklistInput";
import { adminTovarListURL } from "../../../constants";

export function Form() {
  const token = localStorage.getItem("veloJWT");

  const [albumTitle, setAlbumTitle] = useState(""); // название
  const [albumArtist, setAlbumArtist] = useState(""); // артист
  const [albumPrice, setAlbumPrice] = useState(""); // цена
  const [albumCoverLink, setAlbumCoverLink] = useState(""); // ссылка на обложку
  const [albumYandexLink, setAlbumYandexLink] = useState(""); // ссылка на яндекс
  const [albumDate, setAlbumDate] = useState(""); // дата релиза
  const [albumLang, setAlbumLang] = useState("Ru"); // язык
  const [albumTracklist, setAlbumTracklist] = useState([]); // треклист
  const [albumDescription, setAlbumDescription] = useState([]); // о релизе

  // Начальные значения для очистки формы
  const emptyFormData = {
    title: "",
    artist: "",
    price: "",
    img: "",
    yandex: "",
    date: "",
    lang: "Ru",
    trackList: [],
    description: [],
  };

  // универсальная функция изменения состояния в инпутах
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // функция проверки формата даты
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Формат YYYY-MM-DD
    return dateString.match(regex) !== null;
  };

  // функция отправки данных альбома
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Предотвращает перезагрузку страницы

    if (
      !albumTitle ||
      !albumArtist ||
      !albumPrice ||
      !albumCoverLink ||
      !albumLang ||
      !albumTracklist ||
      !albumDescription ||
      !isValidDate(albumDate)
    ) {
      alert(
        "Пожалуйста, заполните все обязательные поля и убедитесь, что дата в формате YYYY-MM-DD."
      );
      return;
    }

    const requestData = {
      title: albumTitle,
      artist: albumArtist.split(", "),
      price: albumPrice,
      img: [albumCoverLink],
      ...(albumYandexLink && { yandex: albumYandexLink }),
      date: new Date(albumDate).toISOString(),
      lang: albumLang,
      trackList: albumTracklist,
      description: albumDescription,
    };

    try {
      const response = await fetch(adminTovarListURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Ошибка. Попробуйте еще раз.");
      }

      alert("Данные успешно отправлены!");

      // Очистка формы после успешной отправки
      setAlbumTitle(emptyFormData.title);
      setAlbumArtist(emptyFormData.artist);
      setAlbumPrice(emptyFormData.price);
      setAlbumCoverLink(emptyFormData.img);
      setAlbumYandexLink(emptyFormData.yandex);
      setAlbumDate(emptyFormData.date);
      setAlbumLang(emptyFormData.lang);
      setAlbumTracklist(emptyFormData.trackList);
      setAlbumDescription(emptyFormData.description);
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка при отправке данных.");
    }
  };

  return (
    <form action="" className={s.addPage__form} onSubmit={handleFormSubmit}>
      <AlbumInput
        key={"albumTitle"}
        id={"albumTitle"}
        labelValue={"Название"}
        placeholderValue={"BANDANA I"}
        inputValue={albumTitle}
        handleChangeInputValue={handleChange(setAlbumTitle)}
      />
      <AlbumInput
        key={"albumArtist"}
        id={"albumArtist"}
        labelValue={"Артист(ы)"}
        placeholderValue={"Big Baby Tape, Kizaru"}
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
