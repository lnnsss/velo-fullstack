import s from "./CartPage.module.css";
import { BuyFooter } from "./miniComponents/BuyFooter";
import { CartItem } from "./miniComponents/CartItem";

export function CartPage({ currentTheme, cartList, setCartList }) {
  const displayCartList = cartList.map((item, i) => <CartItem item={item} key={i} />);

  return (
    <div className={`${s.cartPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <div className={s.korzinaHeader}>
            <h2 className={s.tittle}>Корзина</h2>
            <button className={s.clearKorzina} onClick={() => setCartList([])}>
              Очистить корзину
            </button>
          </div>
          <div className={s.korzina}>
            {cartList.length ? (
              displayCartList
            ) : (
              <span className={s.pusto}>Пусто</span>
            )}
          </div>
          <BuyFooter />
        </div>
      </div>
    </div>
  );
}


