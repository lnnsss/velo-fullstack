import React from "react";
import s from "./CartPage.module.css";
import { CartHeader } from "./miniComponents/CartHeader";
import { BuyFooter } from "./miniComponents/BuyFooter";
import useFetchCart from "../../../hooks/useFetchCart";
import { Cart } from "./miniComponents/Cart";

export function CartPage({ currentTheme }) {
  const token = localStorage.getItem("veloJWT");
  const { cartList, cartId, loading, error } = useFetchCart(token);

  return (
    <div className={`${s.cartPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <CartHeader token={token} cartId={cartId} />
          <Cart
            cartList={cartList}
            cartId={cartId}
            error={error}
            loading={loading}
          />
          <BuyFooter />
        </div>
      </div>
    </div>
  );
}
