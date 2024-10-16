const handleError = require("../handleError");
const Tovar = require("../models/Tovar");

// Получение всех товаров
const getTovars = (req, res) => {
  Tovar.find()
    .then((tovars) => {
      res.status(200).json(tovars);
    })
    .catch((err) => handleError(res, err));
};

// Получение нескольких товаров по artist
const getTovarsByArtist = async (req, res) => {
  const { artist } = req.query; // Получаем параметр artist из запроса

  try {
    // Проверяем, передан ли параметр artist
    if (!artist) {
      return res.status(400).json({ error: "Artist parameter is required" });
    }

    // Преобразуем строку с артистами в массив
    const artistsArray = artist.split(",").map((a) => a.trim());

    // Находим товары, соответствующие артистам
    const tovars = await Tovar.find({ artist: { $in: artistsArray } });

    // Возвращаем найденные товары
    res.status(200).json(tovars);
  } catch (error) {
    handleError(res, error);
  }
};

// Получение одного товара по id
const getTovar = (req, res) => {
  Tovar.findById(req.params.id)
    .then((tovar) => {
      res.status(200).json(tovar);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getTovars,
  getTovarsByArtist,
  getTovar,
};
