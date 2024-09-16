const express = require('express');
const mongoose = require("mongoose");
const tovarRoutes = require("./routes/tovar-route");
const cors = require('cors');
const mongoDbURL = require('./mongoDbUrl');

const PORT = 3001; 

const app = express();
app.use(express.json());
app.use(cors()); 
app.use(tovarRoutes);

mongoose
  .connect(mongoDbURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
})