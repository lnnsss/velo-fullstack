const express = require("express");
const { getUsers, getUserByID, deleteUser } = require("../controllers/admin-controller");

const router = express.Router();

// Получение всех пользователей
router.get("/users", getUsers);

// Получение одного пользователя по id
router.get("/users/:id", getUserByID);

// Удалениние пользователя по id
router.delete("/users/:id", deleteUser);

module.exports = router;