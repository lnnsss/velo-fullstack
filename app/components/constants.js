const host = "http://185.103.101.164:3001"; // http://localhost:3001

// Ссылка на сервер к tovarList
export const tovarListURL = `${host}/tovars`;

// Ссылка на сервер к cartList
export const cartListURL = `${host}/carts`;

// ссылка на сервер к registration
export const registrationURL = `${host}/auth/registration`;

// Ссылка на сервер к login
export const loginURL = `${host}/auth/login`;

// Ссылка на сервер к tovarList для работы на админке
export const userListURL = `${host}/admin/users`;

// Ссылка на сервер к userList для работы на админке
export const adminTovarListURL = `${host}/admin/tovars`;

// Тема по умолчанию
export const theme = false; // светлая - false, темная - true

// Фильтры для каталога
export const catalogFilterList = ["All", "Ru", "En", "< 30$", "> 30$"];

// Фильтры для юзеров админки
export const adminUsersFilterList = ["ALL", "USER", "ADMIN"];

// Условие цены релиза
export const priceCondition = 35; // null или  цена (например: 40)

// Условие языка релиза
export const langCondition = ""; // "" или"Ru", "En"

// Скидка (%)
export const discount = 20;