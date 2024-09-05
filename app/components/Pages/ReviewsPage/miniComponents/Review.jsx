import Image from "next/image";
import s from "./../ReviewsPage.module.css";

export function Review({ review }) {
  return (
    <div className={s.review} id="review_${i}">
      <Image
        src={review.img}
        alt="slide-1"
        width={300}
        height={300}
        className={s.review_image}
      />
      <h5 className={s.review_autor}>{review.name}</h5>
      <p className={s.review_message}>{review.message}</p>
    </div>
  );
}
