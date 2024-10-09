import s from "./../AddPage.module.css";
import { AlbumCoverInput } from "./AlbumCoverInput";
import { AlbumDateInput } from "./AlbumDateInput";
import { AlbumInput } from "./AlbumInput";
import { AlbumLangInput } from "./AlbumLangInput";
import { AlbumParagraphlistInput } from "./AlbumParagraphlistInput";
import { AlbumTracklistInput } from "./AlbumTracklistInput";

export function Form() {
  return (
    <form action="" className={s.addPage__form}>
      <AlbumInput
        key={"albumTitle"}
        id={"albumTitle"}
        labelValue={"Название"}
        placeholderValue={"WILD EA$T"}
      />
      <AlbumInput
        key={"albumArtist"}
        id={"albumArtist"}
        labelValue={"Артист"}
        placeholderValue={"SALUKI"}
      />
      <AlbumInput
        key={"albumPrice"}
        id={"albumPrice"}
        labelValue={"Цена ($)"}
        placeholderValue={"50"}
      />
      <AlbumInput
        key={"albumYandexLink"}
        id={"albumYandexLink"}
        labelValue={"Ссылка на яндекс музыку (при наличии)"}
        placeholderValue={"link"}
      />
      <AlbumCoverInput />
      <div className={s.form__dateAndLang}>
        <AlbumDateInput />
        <AlbumLangInput />
      </div>
      <AlbumTracklistInput />
      <AlbumParagraphlistInput />
      <button type="submit" className={s.form__button}>
        Добавить
      </button>
    </form>
  );
}