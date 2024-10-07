const User = require("../models/User");

// Получение всех пользователей
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users); 
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ message: "Ошибка при получении пользователей" });
  }
};

module.exports = {
  getUsers
};