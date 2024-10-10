// ссылка на сервер к tovarList
export const tovarListURL = "http://localhost:3001/tovars";

// ссылка на сервер к cartList
export const cartListURL = "http://localhost:3001/carts";

// ссылка на сервер к registration
export const registrationURL = "http://localhost:3001/auth/registration";

// ссылка на сервер к login
export const loginURL = "http://localhost:3001/auth/login";

// ссылка на сервер к tovarList для работы на админке
export const userListURL = "http://localhost:3001/admin/users";

// ссылка на сервер к userList для работы на админке
export const adminTovarListURL = "http://localhost:3001/admin/tovars";

// Тема
export const theme = false; // светлая - false, темная - true

// Фильтры для каталога
export const catalogFilterList = ["All", "Ru", "En", "< 30$", "> 30$"];

// Фильтры для юзеров админки
export const adminUsersFilterList = ["ALL", "USER", "ADMIN"];

// Условие цены релиза
export const priceCondition = 35; // null или  цена (например: 40)

// Условие языка релиза
export const langCondition = ""; // "Ru", "En"

// Скидка (%)
export const discount = 20;
