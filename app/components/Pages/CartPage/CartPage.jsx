import React from "react";
import s from "./CartPage.module.css";
import { BuyFooter } from "./miniComponents/BuyFooter";
import { CartItem } from "./miniComponents/CartItem";
import useFetchCart from "../../../hooks/useFetchCart";
import useClearCart from "../../../hooks/useClearCart";

export function CartPage({ currentTheme }) {
  const token = localStorage.getItem("jwtToken");
  const { clearCart } = useClearCart(token);
  const { cartList, cartId, loading, error } = useFetchCart(token); // Объединение вызовов

  const displayCartList = cartList.map((item, i) => (
    <CartItem item={item} cartId={cartId} key={i} />
  ));

  // Очистка корзины
  const handleClearCart = async () => {
    await clearCart(cartId);
  };

  return (
    <div className={`${s.cartPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <div className={s.korzinaHeader}>
            <h2 className={s.tittle}>Корзина</h2>
            <button className={s.clearKorzina} onClick={handleClearCart}>
              Очистить корзину
            </button>
          </div>
          <div className={s.korzina}>
            {loading ? (
              <span className={s.loading}>Загрузка...</span>
            ) : error ? (
              <span className={s.error}>{error}</span>
            ) : cartList.length === 0 ? (
              <span className={s.pusto}>Пусто</span>
            ) : (
              displayCartList
            )}
          </div>
          <BuyFooter />
        </div>
      </div>
    </div>
  );
}
