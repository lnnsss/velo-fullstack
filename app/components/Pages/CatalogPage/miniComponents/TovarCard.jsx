import Image from "next/image";
import s from "./../CatalogPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Link from "next/link";
import { handleAddToCart } from "../../../utils";

export function TovarCard({
  id,
  lang,
  artist,
  title,
  price,
  cover,
  withoutPage,
  discountPrice,
}) {
  const { cartList, setCartList } = useContext(AppContext);

  // Добавление в корзину
  const handleAddToCartLocal = (e) => {
    handleAddToCart(
      cartList,
      setCartList,
      id,
      cover,
      title,
      artist,
      price,
      discountPrice
    );
  };

  // Если релиз был добавлен пользователем, то у него не будет своей страницы
  return (
    <div id={`item_${id}`} key={id} className={s.tovar_wrapper}>
      {withoutPage ? (
        <UserTovar
          id={id}
          lang={lang}
          artist={artist}
          title={title}
          price={price}
        />
      ) : (
        <BaseTovar
          id={id}
          lang={lang}
          artist={artist}
          title={title}
          price={price}
          discountPrice={discountPrice}
          cover={cover}
          handleAddToCart={handleAddToCartLocal}
        />
      )}
    </div>
  );
}

function BaseTovar({
  id,
  lang,
  artist,
  title,
  price,
  discountPrice,
  cover,
  handleAddToCart,
}) {
  return (
    <div key={id}>
      <Link href={`/catalog/${id}`} className={`${s.tovar} ${lang}`}>
        <Image
          src={cover}
          alt={title}
          className={s.tovar_image}
          width={240}
          height={240}
        />
        <h4 className={s.tovar_title}>{title}</h4>
        <span className={s.tovar_artist}>{artist.join(", ")}</span>
        <span className={s.tovar_price}>
          <span className={s.tovar_price_title}>Цена: </span>
          {price}$
        </span>
        {discountPrice && (
          <span className={`${s.tovar_price} ${s.discount}`}>
            <span className={s.tovar_price_title}>Цена со скидкой: </span>
            {discountPrice}$
          </span>
        )}
      </Link>
      <button
        className={s.tovar_btn}
        id={`btn_${id}`}
        onClick={handleAddToCart}
      >
        В корзину
      </button>
    </div>
  );
}
function UserTovar({ id, lang, artist, title, price }) {
  return (
    <>
      <div className={`${s.tovar} ${lang}`} key={id}>
        <Image
          src="https://mywebicons.ru/i/jpg/1db25ba3ca78c326db6600d1a1bd36f7.jpg"
          alt={title}
          className={s.tovar_image}
          width={240}
          height={240}
        />
        <h4 className={s.tovar_title}>{title}</h4>
        <span className={s.tovar_artist}>{artist}</span>
        <span className={s.tovar_price}>
          <span className={s.tovar_price_title}>Цена: </span>
          {price}$
        </span>
      </div>
      <button
        className={s.tovar_btn}
        id={`btn_${id}`}
        onClick={() => {
          alert("Данного товара не существует.");
        }}
      >
        В корзину
      </button>
    </>
  );
}
