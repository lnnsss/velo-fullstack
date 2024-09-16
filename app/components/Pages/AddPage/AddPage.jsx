import { useState } from "react";
import s from "./AddPage.module.css";
import { tovarListURL } from "../../constants";

export function AddPage({ currentTheme }) {
  const emptyFormData = {
    id: "",
    title: "",
    artist: "",
    price: "",
    lang: "Ru",
  };
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    price: "",
    lang: "Ru",
    img: [],
    withoutPage: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id: +(new Date()),
      withoutPage: true,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newTovar = { ...formData, artist: [artist.value] };

    // Validation: Check for empty fields and validate price
    const hasEmptyProperties = Object.values(newTovar).some((value) => value === "");
    const thisPrice = parseFloat(newTovar.price);
    const wrongPrice = thisPrice < 10 || thisPrice > 50 || isNaN(thisPrice);

    if (hasEmptyProperties) {
      alert("Все поля должны быть заполнены!");
      return;
    } else if (wrongPrice) {
      alert("Недопустимая цена!");
      return;
    }

    // POST request to add a new Tovar
    try {
      const response = await fetch(tovarListURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTovar),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении релиза!");
      }

      alert("Релиз успешно добавлен!");
      setFormData(emptyFormData);  // Reset form after successful submission

    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при добавлении релиза!");
    }
  };

  return (
      <div className={`${s.addPage} ${currentTheme && `${s.nightTheme}`}`}>
        <div className={s.pa1}>
          <div className={s.pa1_container}>
            <h2 className={`${s.tittle} ${s.addTittle}`}>Добавьте свой релиз!</h2>
            <form action="" className={s.addForm} onSubmit={handleFormSubmit}>
              <div className={s.addForm_container}>
                <label htmlFor="title" className={s.addFormLabel}>
                  Название
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className={s.addFormInput}
                    placeholder="WILD EA$T"
                    value={formData.title}
                    onChange={handleInputChange}
                />
                <label htmlFor="artist" className={s.addFormLabel}>
                  Артист
                </label>
                <input
                    type="text"
                    id="artist"
                    name="artist"
                    className={s.addFormInput}
                    placeholder="SALUKI"
                    value={formData.artist}
                    onChange={handleInputChange}
                />
                <label htmlFor="price" className={s.addFormLabel}>
                  Цена ($)
                </label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    className={s.addFormInput}
                    placeholder="50"
                    value={formData.price}
                    onChange={handleInputChange}
                />
                <div className={s.formLang}>
                  <span className={s.addFormLabel}>Язык</span>
                  <div className={s.langRadio}>
                    <label htmlFor="radioRu">
                      <input
                          type="radio"
                          id="radioRu"
                          name="lang"
                          value="Ru"
                          checked={formData.lang === "Ru"}
                          onChange={() => setFormData({ ...formData, lang: "Ru" })}
                      />
                      Ru
                    </label>
                    <label htmlFor="radioEn">
                      <input
                          type="radio"
                          id="radioEn"
                          name="lang"
                          value="En"
                          checked={formData.lang === "En"}
                          onChange={() => setFormData({ ...formData, lang: "En" })}
                      />
                      En
                    </label>
                  </div>
                </div>
                <button type="submit" className={s.addNewAlbumBtn}>
                  Добавить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}