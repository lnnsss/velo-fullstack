import s from "./../TovarPage.module.css";
import Image from "next/image";
import { useCoverFullScreen } from "../../../../hooks/useCoverFullScreen";

export function MoreCovers({ tovar }) {
  // Обложки товара
  const thisCovers = tovar.img;
  const coversArray = Object.entries(thisCovers).slice(1);
  const displayCovers = coversArray.map(([key, value], i) => (
    <Cover key={i} title={key} img={value} />
  ));
  if (displayCovers.length) {
    return (
      <div className={s.otherCovers}>
        <h2 className={s.tittle}>Other covers</h2>
        <div className={s.otherCovers_container}>{displayCovers}</div>
      </div>
    );
  } else {
    return null;
  }
}

function Cover({ img, title }) {
  const { isFullScreen, toggleFullScreen } = useCoverFullScreen();

  return (
    <div
      className={isFullScreen ? s.fullScreenBg : ""}
      onClick={toggleFullScreen}
    >
      <Image
        className={`${s.otherCover} ${isFullScreen ? s.fullScreenCover : ""}`}
        src={img}
        alt={title}
        title={isFullScreen ? "" : title}
        width={isFullScreen ? 520 : 220}
        height={isFullScreen ? 520 : 220}
      />
    </div>
  );
}
