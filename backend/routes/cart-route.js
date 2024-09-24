const express = require("express");
const {
    getCart,
    deleteCart,
    addCart,
    updateCart,
    getCartItems,
    addItemToCart,
    clearCart
} = require("./../controllers/cart-controller");

const router = express.Router();

// Получение одной корзины по id
router.get("/carts/:id", getCart);

// Удаление одной корзины по id 
router.delete("/carts/:id", deleteCart);

// Создание одной корзины 
router.post("/carts", addCart);

// Обновление одной корзины по id
router.patch("/carts/:id", updateCart);

// Добавление товаров по id корзины
router.get('/carts/:id/items', getCartItems);

// Добавление товара в корзину по id
router.post('/carts/:id/items', addItemToCart);

// Очистка корзины по id
router.delete('/carts/:id/clear', clearCart);

module.exports = router;