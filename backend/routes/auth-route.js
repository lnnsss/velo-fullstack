const express = require("express");
const { getUsers, registration, login } = require("../controllers/auth-controller");
const {check} = require('express-validator');
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Получение всех пользователей
router.get('/users', roleMiddleware(['USER']), getUsers);

// Регистрация
router.post('/registration', [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть содержать как минимум 4 символа, но не больше 10").isLength({min: 4, max: 10})
], registration);

// Вход в аккаунт
router.post('/login', login);

module.exports = router;