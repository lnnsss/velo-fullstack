const express = require("express");
const { registration, login } = require("../controllers/auth-controller");
const {check} = require('express-validator');

const router = express.Router();

// Регистрация c валидацией
router.post('/registration', [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть содержать как минимум 4 символа, но не больше 10").isLength({min: 4, max: 10})
], registration);

// Вход в аккаунт
router.post('/login', login);

module.exports = router;