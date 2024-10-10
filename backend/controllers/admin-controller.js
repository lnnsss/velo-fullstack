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

// Удаление одного пользователя по id
const deleteUser = async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

// Получение всех ролей пользователя по id
const getUserRoles = async (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user.roles);
    })
    .catch((err) => handleError(res, err));
};

// Добавление роли пользователю по id
const addUserRole = async (req, res) => {
  const { role } = req.body;
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const roles = user.roles;

    roles.push(role);

    const updatedRoles = await user.save();
    res.status(200).json(updatedRoles);
  } catch (err) {
    handleError(res, err);
  }
};

// Отнятие роли у пользователя по id
const delUserRole = async (req, res) => {
  const { role } = req.body;
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const roles = user.roles;
    const indexToRemove = roles.indexOf(role);

    if (indexToRemove !== -1) {
      roles.splice(indexToRemove, 1); 
    }

    const updatedRoles = await user.save();
    res.status(200).json(updatedRoles);
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getUsers,
  getUserByID,
  deleteUser,
  getUserRoles,
  addUserRole,
  delUserRole,
};
