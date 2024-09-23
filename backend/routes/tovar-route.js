const express = require("express");
const {
    getTovars,
    getTovarsByArtist,
    getTovar,
    deleteTovar, 
    addTovar, 
    updateTovar
} = require("./../controllers/tovar-controller");

const router = express.Router();

// Получение всех товаров
router.get("/tovars", getTovars);

// Получение нескольких товаров по artst
router.get('/tovars', getTovarsByArtist);

// Получение одного товара по id
router.get("/tovars/:id", getTovar);

// Удаление одного товара по id 
router.delete("/tovars/:id", deleteTovar);

// Создание одного товара 
router.post("/tovars", addTovar);

// Обновление одного товара по id
router.patch("/tovars/:id", updateTovar);

module.exports = router;