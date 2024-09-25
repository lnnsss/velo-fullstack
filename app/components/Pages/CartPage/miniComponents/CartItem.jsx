import { useEffect, useState } from "react";
import s from "./../CartPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { tovarListURL } from "../../../constants";
import useAddToCart from "../../../../hooks/useAddToCart";

export function CartItem({ item, cartId }) {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("veloJWT");
  const { addToCart } = useAddToCart(token);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${tovarListURL}/${item.product_id}`);
        if (!response.ok) {
          throw new Error("Ошибка при получении данных товара");
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [item.product_id]);

  // Обработка состояния загрузки и ошибок
  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  // Функция для увеличения количества товара
  const handleIncreaseQuantity = async () => {
    await addToCart(cartId, item.product_id, 1, item.price);
  };

  // Функция для уменьшения количества товара
  const handleDecreaseQuantity = async () => {
    if (item.quantity > 1) {
      await addToCart(cartId, item.product_id, -1, item.price);
    }
  };

  return (
    <div className={s.korzinaItem}>
      <div className={s.korzina_tovar_image_div}>
        <Link href={`/catalog/${item.product_id}`}>
          <Image
            src={productDetails.img[0]}
            alt="tovar"
            className={s.korzina_tovar_image}
            width={120}
            height={120}
          />
        </Link>
      </div>
      <h3 className={s.korzina_tovar_title}>{productDetails.title}</h3>
      <h4 className={s.korzina_tovar_artist}>
        {productDetails.artist.join(", ")}
      </h4>
      <h4 className={s.korzina_tovar_price}>{item.price * item.quantity}$</h4>
      <div className={s.korzina_tovar_btns}>
        <ChangePriceButton item={item} f={handleDecreaseQuantity}>
          &lt;
        </ChangePriceButton>
        <h4 className={s.korzina_tovar_count}>{item.quantity}</h4>
        <ChangePriceButton item={item} f={handleIncreaseQuantity}>
          &gt;
        </ChangePriceButton>
      </div>
    </div>
  );
}

function ChangePriceButton({ item, f, children }) {
  return (
    <button id={item.id} className={s.korzina_tovar_fix} onClick={f}>
      {children}
    </button>
  );
}