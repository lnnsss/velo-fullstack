const express = require("express");
const {
  deleteTovar,
  addTovar,
  updateTovar,
} = require("./../controllers/admin-tovar-controller");

const router = express.Router();

// Удаление одного товара по id
router.delete("/tovars/:id", deleteTovar);

// Создание одного товара
router.post("/tovars", addTovar);

// Обновление одного товара по id
router.patch("/tovars/:id", updateTovar);

module.exports = router;
