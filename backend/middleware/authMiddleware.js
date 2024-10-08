require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
  if ((req.method = "OPTIONS")) {
    next();
  }

  try {
    const token = req.header.authorization.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Пользователь не авторизован" });
    }
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (e) {
    console.error(e);
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
};
