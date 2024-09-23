const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const Role = require("../models/Role");
const { secret } = require("../config");
const jwt = require('jsonwebtoken');

// Генерация токена
const generateAccessToken = (id, roles) => {
  const payload = { id, roles };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

const getUsers = async (req, res) => {
  try {
      const users = await User.find();
      return res.json(users); // Добавлено return
  } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Ошибка при получении пользователей" }); // Добавлено return
  }
};

const registration = async (req, res) => {
  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ message: "Ошибка при регистрации", errors }); // Добавлено return
      }

      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
          return res.status(400).json({ message: `Пользователь ${username} уже существует` }); // Добавлено return
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
          username,
          password: hashPassword,
          roles: userRole.value,
      });

      await user.save();
      return res.json({ message: "Пользователь успешно зарегистрирован" }); // Добавлено return
  } catch (e) {
      console.error(e);
      return res.status(400).json({ message: "Registration error" }); // Добавлено return
  }
};

const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Проверяем наличие пользователя
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: `Пользователь ${username} не найден` });
      }
  
      // Проверяем правильность пароля
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Неверный пароль" });
      }
  
      // Генерируем токен
      const token = generateAccessToken(user._id, user.roles);
      
      // Возвращаем токен
      return res.json({ token });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Ошибка при входе" }); // Изменено на 500 для внутренних ошибок
    }
  };

module.exports = {
  getUsers,
  registration,
  login,
};