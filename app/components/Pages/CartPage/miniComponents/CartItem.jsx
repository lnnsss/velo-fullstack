import { useContext, useState } from "react";
import s from "./../CartPage.module.css";
import Image from "next/image";
import { AppContext } from "../../../../contexts/AppContext";
import Link from "next/link";
import { useViewedAlbums } from "../../../../hooks/useViewedAlbums";

export function CartItem({ item }) {
  const { cartList, setCartList } = useContext(AppContext);
  const [count, setCount] = useState(item.count);
  const { viewedAlbums, toggleViewAlbum } = useViewedAlbums();

  // изменение количества товара в корзине
  const handleCountChange = (e) => {
    let itemId = e.target.id;
    let newCartItem = cartList.find((el) => el.id === itemId);
    if (e.target.textContent === "<") {
      if (newCartItem.count > 1) {
        newCartItem.count--;
      } else {
        setCartList(cartList.filter((el) => el.id != itemId));
        return;
      }
    } else if (e.target.textContent === ">") {
      newCartItem.count++;
    }
    newCartItem.totalPrice = newCartItem.price * newCartItem.count;
    setCount(newCartItem.count);
    setCartList([...cartList]);
  };

  return (
    <div className={s.korzinaItem}>
      <div className={s.korzina_tovar_image_div}>
        <Link
          href={`/catalog/${item.id}`}
          onClick={() =>
            toggleViewAlbum({
              id: item.id,
              cover: item.cover,
              title: item.title,
            })
          }
        >
          <Image
            src={item.cover}
            alt="tovar"
            className={s.korzina_tovar_image}
            width={120}
            height={120}
          />
        </Link>
      </div>
      <h3 className={s.korzina_tovar_title}>{item.title}</h3>
      <h4 className={s.korzina_tovar_artist}>{item.artist.join(", ")}</h4>
      <h4 className={s.korzina_tovar_price}>{item.totalPrice}$</h4>
      <div className={s.korzina_tovar_btns}>
        <button
          id={item.id}
          className={s.korzina_tovar_fix}
          onClick={handleCountChange}
        >
          &lt;
        </button>
        <h4 className={s.korzina_tovar_count}>{count}</h4>
        <button
          id={item.id}
          className={s.korzina_tovar_fix}
          onClick={handleCountChange}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
