import { useContext, useState } from "react";
import s from "./../CartPage.module.css";
import { AppContext } from "../../../../contexts/AppContext";

export function BuyFooter() {
  const { cartList, setCartList } = useContext(AppContext);
  let itogoPriceCounter = cartList.reduce(
    (acc, current) => Number(acc) + Number(current.totalPrice),
    0
  );

  return (
    <div className={`${s.buyFooter} ${s._container}`}>
      <div className={s.buyFooter_left}>
        <span className={s.itogo}>Итого:</span>
        <span className={s.itogoPrice}>{itogoPriceCounter}$</span>
      </div>
      <div className={s.buyFooter_right}>
        <button
          className={`${s.buyFooter_btn} ${s.buyBtn}`}
        >
          Заказать
        </button>
      </div>
    </div>
  );
}
