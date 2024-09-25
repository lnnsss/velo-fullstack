import s from "./../CartPage.module.css";
import { CartItem } from "./CartItem";

export function Cart({ cartList, cartId, error, loading }) {
  const displayCartList = cartList.map((item, i) => (
    <CartItem item={item} cartId={cartId} key={i} />
  ));

  return (
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
  );
}