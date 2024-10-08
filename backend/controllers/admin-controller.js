const User = require("../models/User");

// Функция для вывода ошибок
handleError = (res, error) => {
  res.status(500).json({ error });
};

// Получение всех пользователей
const getUsers = async (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => handleError(res, err));
};

// Получение одного пользователя по id
const getUserByID = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => handleError(res, err));
};

// Удалениние одного пользователя по id
const deleteUser = async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getUsers,
  getUserByID,
  deleteUser,
};
