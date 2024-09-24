import Image from "next/image";
import s from "./../CatalogPage.module.css";
import Link from "next/link";
import useAddToCart from "../../../../hooks/useAddToCart";

export function TovarCard({
  id,
  lang,
  artist,
  title,
  price,
  cover,
  discountPrice,
  cartId,
  token,
}) {
  const { addToCart } = useAddToCart(token);

  // Добавление в корзину
  const handleAddToCart = () => {
    addToCart(cartId, id, 1, price);
  };

  return (
    <div id={`item_${id}`} key={id} className={s.tovar_wrapper}>
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
    </div>
  );
}
