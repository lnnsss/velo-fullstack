import s from "./TovarPage.module.css";
import {useContext} from "react";
import {AppContext} from "../../../contexts/AppContext";
import {TovarHeader} from "./miniComponents/TovarHeader";
import {Tracklist} from "./miniComponents/Tracklist";
import {Description} from "./miniComponents/Description";
import {MoreCovers} from "./miniComponents/MoreCovers";
import {MoreFrom} from "./miniComponents/MoreFrom";
import {handleAddToCart} from "../../utils";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const id = tovar._id,
    cover = tovar.img[0],
    title = tovar.title,
    artist = tovar.artist,
    discountPrice = tovar.discountPrice,
    price = tovar.price;

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

  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <TovarHeader tovar={tovar} handleAddToCart={handleAddToCartLocal} />
        <div className={`${s.pa1_container} ${s.grid_container}`}>
          <Tracklist tovar={tovar} />
          <Description tovar={tovar} />
          <MoreCovers tovar={tovar} />
          <MoreFrom artist={artist} title={title} />
        </div>
      </div>
    </div>
  );
}
