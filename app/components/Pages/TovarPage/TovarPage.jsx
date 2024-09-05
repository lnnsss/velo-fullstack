import s from "./TovarPage.module.css";
import {useContext, useEffect, useState} from "react";
import { AppContext } from "../../../contexts/AppContext";
import { TovarHeader } from "./miniComponents/TovarHeader";
import { Tracklist } from "./miniComponents/Tracklist";
import { Description } from "./miniComponents/Description";
import { MoreCovers } from "./miniComponents/MoreCovers";
import { MoreFrom } from "./miniComponents/MoreFrom";
import { handleAddToCart } from "../../utils";
import {discount, langCondition, priceCondition} from "../../constants";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const [finalTovarList, setFinalTovarList] = useState([]);
  const id = tovar.id,
    cover = tovar.img.cover,
    title = tovar.title,
    artist = tovar.artist,
    discountPrice = tovar.discountPrice,
    price = tovar.price;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tovarList');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFinalTovarList(data); // Присвоение массива в состояние
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  // остальные релизы этого исполнителя(ей) на сайте
  const moreAlbums = finalTovarList.filter(
    (el) => artist.some((a) => el.artist.includes(a)) && el.title !== title
  );

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
          <MoreFrom artist={artist} moreAlbums={moreAlbums} />
        </div>
      </div>
    </div>
  );
}
