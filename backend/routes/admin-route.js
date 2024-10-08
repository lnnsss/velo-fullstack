const express = require("express");
const { getUsers, getUserByID, deleteUser, getUserRoles, addUserRole, delUserRole } = require("../controllers/admin-controller");

const router = express.Router();

// Получение всех пользователей
router.get("/users", getUsers);

// Получение одного пользователя по id
router.get("/users/:id", getUserByID);

// Удаление пользователя по id
router.delete("/users/:id", deleteUser);

// Получение всех ролей пользователя по id
router.get('/users/:id/roles', getUserRoles);

// Добавление роли пользователю по id
router.post('/users/:id/roles', addUserRole);

// Отнять роль у пользователя по id
router.delete('/users/:id/roles', delUserRole);

module.exports = router;