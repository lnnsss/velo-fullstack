const handleError = require("../handleError");
const Cart = require("./../models/Cart");

// Получение одной корзины по id
const getCart = (req, res) => {
    Cart.findById(req.params.id)
      .then((cart) => {
        res.status(200).json(cart);
      })
      .catch((err) => handleError(res, err));
};

// Удаление одной корзины по id 
const deleteCart = (req, res) => {
    Cart.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => handleError(res, err));
};

// Создание одной корзины 
const addCart = (req, res) => {
  const cart = new Cart(req.body);

  cart
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

// Обновление одной корзины по id
const updateCart = (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => handleError(res, err));
};

// Получение товаров корзины по id корзины
const getCartItems = (req, res) => {
    Cart.findById(req.params.id)
      .then((cart) => {
        res.status(200).json(cart.items);
      })
      .catch((err) => handleError(res, err));
};

// Добавление товара в корзину
const addItemToCart = async (req, res) => {
  const { product_id, quantity, price } = req.body;
  const { id: cartId } = req.params;

  try {
    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ message: "Корзина не найдена" });
    }

    const existingItem = cart.items.find(item => item.product_id.toString() === product_id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product_id, quantity, price });
    }

    const updatedCart = await cart.save();
    res.status(200).json(updatedCart);
  } catch (err) {
    handleError(res, err);
  }
};

// Очистка корзины по id
const clearCart = async (req, res) => {
  const { id: cartId } = req.params;

  try {
    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ message: "Корзина не найдена" });
    }

    // Очистка массива items
    cart.items = [];
    
    const updatedCart = await cart.save();
    res.status(200).json(updatedCart); // Возвращаем обновленную корзину
  } catch (err) {
    handleError(res, err);
  }
};


module.exports = {
  getCart, deleteCart, addCart, updateCart, getCartItems, addItemToCart, clearCart
}