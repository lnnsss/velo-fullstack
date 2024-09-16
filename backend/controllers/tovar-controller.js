const Tovar = require("./../models/tovar");

// Функция для вывода ошибок
handleError = (res, error) => {
  res.status(500).json({ error });
};

// Получение всех товаров
const getTovars = (req, res) => {
    Tovar.find()
      .then((tovars) => {
        res.status(200).json(tovars);
      })
      .catch((err) => handleError(res, err));
};

// Получение нескольких товаров по artst
const getTovarsByArtist = async (req, res) => {
  const { artist } = req.query; // Получаем параметр artist из запроса

  try {
    // Проверяем, передан ли параметр artist
    if (!artist) {
      return res.status(400).json({ error: "Artist parameter is required" });
    }

    // Преобразуем строку с артистами в массив
    const artistsArray = artist.split(",").map(a => a.trim());

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
    const tovar = new Tovar(req.body);
  
    tovar
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => handleError(res, err));
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
    getTovars, getTovarsByArtist, getTovar, deleteTovar, addTovar, updateTovar
}