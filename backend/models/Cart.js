const { Schema, model } = require("mongoose");

// Схема для элементов корзины
const cartItemSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product", 
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, 
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
});

// Схема для корзины
const cartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [cartItemSchema], 
});

// Создаем модели
const Cart = model("Cart", cartSchema);
const CartItem = model("CartItem", cartItemSchema);

module.exports = { Cart, CartItem };

module.exports = model("Cart", cartSchema);
