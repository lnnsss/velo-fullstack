const Tovar = require("../models/Tovar");

// Функция для вывода ошибок
const handleError = (res, err) => {
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Ошибка валидации", errors: err.errors });
  }

  return res.status(500).json({ message: "Внутренняя ошибка сервера" });
};

// Удаление одного товара по id
const deleteTovar = (req, res) => {
  Tovar.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

// Создание одного товара
const addTovar = (req, res) => {
  const { title, artist, price, img, date, lang, trackList, description } =
    req.body; // Проверка входных данных

  if (
    !title ||
    !artist ||
    !price ||
    !img ||
    !date ||
    !lang ||
    !Array.isArray(trackList) ||
    !Array.isArray(description)
  ) {
    return res.status(400).json({ message: "Все поля обязательны." });
  }

  const tovar = new Tovar(req.body);

  tovar
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error("Ошибка при сохранении товара:", err);
      handleError(res, err);
    });
};

// Обновление одного товара по id
const updateTovar = (req, res) => {
  Tovar.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  deleteTovar,
  addTovar,
  updateTovar,
};
