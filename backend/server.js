const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config(); // Загружает переменные окружения из файла .env
const mongoDbURL = process.env.MONGODB_URL;

const tovarRoutes = require("./routes/tovar-route");
const adminTovarRoutes = require("./routes/admin-tovar-route");
const cartRoutes = require("./routes/cart-route");
const authRoutes = require("./routes/auth-route");
const adminRoutes = require("./routes/admin-route");
const roleMiddleware = require("./middleware/roleMiddleware");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors()); // Включает CORS для разрешения кросс-доменных запросов к API

app.use(tovarRoutes);
app.use(cartRoutes);
app.use("/auth", authRoutes);
app.use("/admin", roleMiddleware(["ADMIN"]), adminRoutes);
app.use("/admin", roleMiddleware(["ADMIN"]), adminTovarRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});