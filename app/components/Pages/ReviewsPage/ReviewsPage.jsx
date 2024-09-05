import s from "./ReviewsPage.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "./miniComponents/Carousel";
import { Review } from "./miniComponents/Review";

export function ReviewsPage({ currentTheme }) {
  const reviewsList = [
    {
      id: 1,
      name: "Тимур",
      message:
        "Спасибо за товар! Все качественно! Сначала думал это скам, но заказал. Не разочарован!",
      img: "https://i.pinimg.com/564x/a1/1d/f8/a11df85aa8e15f9e6bc05b9aedfb8046.jpg",
    },
    {
      id: 2,
      name: "Роберт",
      message: "ура",
      img: "https://i.pinimg.com/564x/a5/c2/b8/a5c2b8f650cb989f86bfad50f7ad8e62.jpg",
    },
    {
      id: 3,
      name: "Аня",
      message:
        "Большое спасибо! Наконецто могу послушать Анну Асти на виниле! Лучший подарок на день рождения!",
      img: "https://i.pinimg.com/564x/9f/49/f4/9f49f4a5330b92746648f88ff2d2f0e3.jpg",
    },
    {
      id: 4,
      name: "Антон",
      message:
        "Подарили отцу Басту на виниле. Рад! 5 звезд, буду заказывать еще!",
      img: "https://www.thissongslaps.com/wp-content/uploads/2015/06/pegboard-nerds-the-wall-1.jpg",
    },
    {
      id: 5,
      name: "Егор",
      message: "Плюс один диск в коллецию, класс!",
      img: "https://i.pinimg.com/564x/0e/c1/06/0ec10693225abd978966c3c4272a0c7e.jpg",
    },
    {
      id: 6,
      name: "Айнур",
      message: "Товар пришел целым и не вредимым. Респект!",
      img: "https://i.pinimg.com/564x/9b/a0/af/9ba0af5d4e47d13498923c49da86c21d.jpg",
    },
  ];
  const displayReviews = reviewsList.map((el, i) => <Review review={el} key={i} />);

  return (
    <div className={`${s.reviewsPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt}`}>Отзывы</h2>
          <Carousel>{displayReviews}</Carousel>
        </div>
      </div>
    </div>
  );
}
