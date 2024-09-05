import s from "./../MainPage.module.css";
import { discount, priceCondition, langCondition } from "../../../constants";
import Link from "next/link";
import { useDiscountTime } from "../../../../hooks/useDiscountTime";

export function DiscountBanner() {
  // Таймер
  const { hours, minutes, seconds } = useDiscountTime();

  return (
    <Link href="/catalog" className={s.banner}>
      <div className={s.banner_container}>
        <span className={s.discountTitle}>
          Скидки
          {priceCondition &&
            ` ${discount}% на любой диск от ${priceCondition}$!`}
          {langCondition && ` ${discount}% на все ${langCondition} альбомы!`}
        </span>
        <span className={s.discountTitle}>
          Поторопитесь! Осталось{" "}
          <span className={s.time}>
            {hours}ч {minutes}м {seconds}сек
          </span>
          !
        </span>
      </div>
    </Link>
  );
}
