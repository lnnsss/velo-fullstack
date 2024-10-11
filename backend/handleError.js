// Функция для вывода ошибок
const handleError = (res, err) => {
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Ошибка валидации", errors: err.errors });
  }

  return res.status(500).json({ err });
};

module.exports = handleError;
