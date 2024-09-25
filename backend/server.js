const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const mongoDbURL = process.env.MONGODB_URL;

const tovarRoutes = require("./routes/tovar-route");
const cartRoutes = require("./routes/cart-route");
const authRoutes = require("./routes/auth-route");

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(tovarRoutes);
app.use(cartRoutes);
app.use("/auth", authRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
