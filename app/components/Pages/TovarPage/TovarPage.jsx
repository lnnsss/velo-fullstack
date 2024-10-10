import s from "./TovarPage.module.css";
import { TovarHeader } from "./miniComponents/TovarHeader";
import { Tracklist } from "./miniComponents/Tracklist";
import { Description } from "./miniComponents/Description";
import { MoreCovers } from "./miniComponents/MoreCovers";
import { MoreFrom } from "./miniComponents/MoreFrom";

export function TovarPage({ currentTheme, tovar }) {
  const title = tovar.title,
    artist = tovar.artist,
    description = tovar.description;

  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <TovarHeader tovar={tovar} />
        <div className={`${s.pa1_container} ${s.grid_container}`}>
          <Tracklist tovar={tovar} />
          <Description description={description} />
          <MoreCovers tovar={tovar} />
          <MoreFrom artist={artist} title={title} />
        </div>
      </div>
    </div>
  );
}
