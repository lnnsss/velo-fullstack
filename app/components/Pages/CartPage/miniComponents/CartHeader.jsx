import useClearCart from "../../../../hooks/useClearCart";
import s from "./../CartPage.module.css";

export function CartHeader({ token, cartId }) {
  const { clearCart } = useClearCart(token);

  // Очистка корзины
  const handleClearCart = async () => {
    await clearCart(cartId);
  };

  return (
    <div className={s.korzinaHeader}>
      <h2 className={s.tittle}>Корзина</h2>
      <button className={s.clearKorzina} onClick={handleClearCart}>
        Очистить корзину
      </button>
    </div>
  );
}
