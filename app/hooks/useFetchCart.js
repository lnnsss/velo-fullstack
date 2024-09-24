import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { cartListURL } from "../components/constants";

const useFetchCart = (token) => {
  const [cartList, setCartList] = useState([]);
  const [cartId, setCartId] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const decodedToken = jwtDecode(token);
        const userCartId = decodedToken.cart_id;

        if (!userCartId) {
          throw new Error("Cart ID не найден в токене");
        } else {
          setCartId(userCartId);
        }

        const response = await fetch(`${cartListURL}/${userCartId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Не удалось получить данные корзины");
        }

        const data = await response.json();

        if (data && Array.isArray(data.items)) {
          setCartList(data.items);
        } else {
          console.error("Ожидали массив элементов, но получили:", data);
          setCartList([]); 
        }
      } catch (error) {
        console.error("Ошибка получения данных корзины:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  return { cartList, cartId, loading, error };
};

export default useFetchCart;
