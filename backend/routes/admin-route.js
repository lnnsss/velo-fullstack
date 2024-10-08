const express = require("express");
const { getUsers } = require("../controllers/admin-controller");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// Получение всех пользователей
router.get("/users", getUsers);

module.exports = router;