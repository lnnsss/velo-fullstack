import s from "./MainPage.module.css";
import { DiscountBanner } from "./miniComponents/DiscountBanner";
import { Pa1 } from "./miniComponents/Pa1";
import { Pa2 } from "./miniComponents/Pa2";
import { Pa3 } from "./miniComponents/Pa3";
import { Pa4 } from "./miniComponents/Pa4";

export function MainPage({ currentTheme }) {

  return (
    <div className={`${s.mainPage} ${currentTheme && `${s.nightTheme}`}`}>
      <DiscountBanner />
      <Pa1 />
      <Pa2 />
      <Pa3 />
      <Pa4 />
    </div>
  );
}
