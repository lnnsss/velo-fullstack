import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./../ReviewsPage.module.css";

// Пагинация для слайдера
// При использовании - переименовать компоненту Slider на StyledSlider & установить значение  true для dots
//import styled from "styled-components";
// const StyledSlider = styled(Slider)`
//   .slick-dots {
//     bottom: 10px; /* Расположение пагинации снизу */
//   }
//   .slick-dots li button:before {
//     color: var(--red); /* Цвет точек */
//   }
// `;

export function Carousel({ children }) {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className={s.mySwiper} {...settings}>
      {children}
    </Slider>
  );
}
