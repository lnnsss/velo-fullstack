import { useState } from "react";
import { cartListURL } from "../components/constants";

const useClearCart = (token) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearCart = async (cartId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${cartListURL}/${cartId}/clear`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Ошибка при очистке корзины");
      }

    } catch (error) {
      console.error("Ошибка:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { clearCart, loading, error };
};

export default useClearCart;