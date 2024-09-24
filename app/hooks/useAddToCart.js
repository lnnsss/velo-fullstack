import { useState } from "react";
import { cartListURL } from "../components/constants";

const useAddToCart = (token) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (cartId, productId, quantity, price) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${cartListURL}/${cartId}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId, quantity, price }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при добавлении товара в корзину");
      }

      const updatedCart = await response.json();
      return updatedCart;
    } catch (error) {
      console.error("Ошибка:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { addToCart, loading, error };
};

export default useAddToCart;