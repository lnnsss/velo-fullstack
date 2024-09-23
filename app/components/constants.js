// ссылка на сервер к tovarList
export const tovarListURL = 'http://localhost:3001/tovars';

// ссылка на сервер к registration
export const registrationURL = 'http://localhost:3001/auth/registration';

// ссылка на сервер к login
export const loginURL = 'http://localhost:3001/auth/login';

// Тема
export const theme = false; // светлая - false, темная - true

// Фильтры для каталога
export const filterList = ["All", "Ru", "En", "< 30$", "> 30$"];

// Условие цены релиза
export const priceCondition = 35; // null или  цена (например: 40)

// Условие языка релиза
export const langCondition = ""; // "Ru", "En"

// Скидка (%)
export const discount = 20;
