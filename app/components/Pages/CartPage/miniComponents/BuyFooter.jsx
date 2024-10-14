import { useEffect, useState } from "react";
import s from "./../CartPage.module.css";
import useFetchCart from "../../../../hooks/useFetchCart"; // Путь к хуку

export function BuyFooter() {
  const token = localStorage.getItem("veloJWT");
  const { cartList, loading, error } = useFetchCart(token);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartList.length > 0) {
      const itogoPriceCounter = cartList.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
      setTotalPrice(itogoPriceCounter);
    }
  }, [cartList]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={`${s.buyFooter} ${s._container}`}>
      <div className={s.buyFooter_left}>
        <span className={s.itogo}>Итого:</span>
        <span className={s.itogoPrice}>{totalPrice}$</span>
      </div>
      <div className={s.buyFooter_right}>
        <button className={`${s.buyFooter_btn} ${s.buyBtn}`}>
          Заказать
        </button>
      </div>
    </div>
  );
}
