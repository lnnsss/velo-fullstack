import useAddToCart from "../../../../hooks/useAddToCart";
import { useCoverFullScreen } from "../../../../hooks/useCoverFullScreen";
import useFetchCart from "../../../../hooks/useFetchCart";
import s from "./../TovarPage.module.css";
import Image from "next/image";

export function TovarHeader({ tovar }) {
  const { isFullScreen, toggleFullScreen } = useCoverFullScreen();
  const token = localStorage.getItem("veloJWT");
  const { addToCart } = useAddToCart(token);
  const { cartId } = useFetchCart(token);

  // Добавление в корзину
  const handleAddToCart = () => {
    addToCart(cartId, tovar._id, 1, tovar.price);
  };

  // Форматируем дату в строку
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateObject = new Date(tovar.date);
  const formattedDate = dateObject.toLocaleDateString('ru-RU', options);

  return (
    <div className={s.tovar_header}>
      <div
        className={s.tovar_header_background}
        style={{
          backgroundImage: `url(${tovar.img[0]})`,
        }}
      ></div>
      <div className={s.tovar_header_container}>
        <div
          className={isFullScreen ? s.fullScreenBg : ""}
          onClick={toggleFullScreen}
        >
          <Image
            className={`${s.tovar_cover} ${
              isFullScreen ? s.fullScreenCover : ""
            }`}
            alt="cover"
            src={tovar.img[0]}
            width={isFullScreen ? 520 : 300}
            height={isFullScreen ? 520 : 300}
          />
        </div>
        <div className={s.tovar_header_text}>
          <h2 className={s.tovar_header_title}>{tovar.title}</h2>
          <h2 className={s.tovar_header_artist}>{tovar.artist.join(", ")}</h2>
          <h2 className={s.tovar_header_date}>{formattedDate}</h2>
          <button
            id={`btn_${tovar.id}`}
            className={`${s.tovar_header_button} ${s.buyButton}`}
            onClick={handleAddToCart}
          >
            <span className={s.btn_price}>
              <span className={tovar.discountPrice && s.oldPrice}>
                {tovar.price}
              </span>
              {tovar.discountPrice}
            </span>
          </button>
          {tovar.yandex && <YandexBtn src={tovar.yandex} />}
        </div>
      </div>
    </div>
  );
}

function YandexBtn({ src }) {
  return (
    <a
      className={`${s.tovar_header_button} ${s.yaButton}`}
      href={src}
      target="_blank"
    >
      Слушать
    </a>
  );
}
