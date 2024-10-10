const express = require("express");
const {
  getTovars,
  getTovarsByArtist,
  getTovar,
} = require("./../controllers/tovar-controller");

const router = express.Router();

// Получение всех товаров
router.get("/tovars", getTovars);

// Получение нескольких товаров по artst
router.get("/tovars", getTovarsByArtist);

// Получение одного товара по id
router.get("/tovars/:id", getTovar);

module.exports = router;