const { default: mongoose } = require("mongoose");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("./../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");
const secret = process.env.SECRET;

// Генерация токена
const generateAccessToken = (id, roles, cart_id) => {
  const payload = {
    id,
    roles,
    cart_id, 
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

// Получение всех пользователей
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users); // Добавлено return
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ message: "Ошибка при получении пользователей" }); // Добавлено return
  }
};

// Регистрация
const registration = async (req, res) => {
  const session = await mongoose.startSession(); // Начало сессии
  session.startTransaction(); // Начало транзакции

  try {
    // Проверка ошибок валидации
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Ошибка при регистрации", errors });
    }

    const { username, password } = req.body;

    // Проверка на существование пользователя
    const candidate = await User.findOne({ username });
    if (candidate) {
      return res
        .status(400)
        .json({ message: `Пользователь ${username} уже существует` });
    }

    // Хеширование пароля
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "USER" });

    // Создание пользователя
    const user = new User({
      username,
      password: hashPassword,
      roles: userRole.value,
    });

    // Сохраняем пользователя
    const savedUser = await user.save({ session });

    // Создание новой корзины с user_id
    const cart = new Cart({
      user_id: savedUser._id, // Передаем ID созданного пользователя в поле user_id
    });

    const savedCart = await cart.save({ session }); // Сохранение корзины

    // Присваиваем cart_id пользователю
    savedUser.cart_id = savedCart._id;
    await savedUser.save({ session }); // Обновление пользователя с cart_id

    // Подтверждение транзакции
    await session.commitTransaction();

    return res.json({
      message: "Пользователь успешно зарегистрирован",
      user: savedUser,
    });
  } catch (e) {
    await session.abortTransaction(); // Откат транзакции при ошибке
    console.error(e);
    return res
      .status(400)
      .json({ message: "Ошибка регистрации. Попробуйте еще раз." });
  } finally {
    session.endSession(); // Закрываем сессию
  }
};

// Вход в аккаунт
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Проверяем наличие пользователя
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: `Пользователь ${username} не найден` });
    }

    // Проверяем правильность пароля
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const token = generateAccessToken(user._id, user.roles, user.cart_id);

    // Возвращаем токен
    return res.json({ token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Ошибка при входе" }); 
  }
};

module.exports = {
  getUsers,
  registration,
  login,
};
