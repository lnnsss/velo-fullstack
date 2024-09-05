import s from "./../TovarPage.module.css";

export function Tracklist({ tovar }) {
  // Треклист товара
  const thisTracklist = tovar.trackList;
  const tracklistArray = Object.entries(thisTracklist);
  const displayTracks = tracklistArray.map(([key, value], i) => (
    <Track key={i} title={key} feats={value} numb={i + 1} />
  ));

  return (
    <div className={s.tracklist}>
      {displayTracks}
      <div className={s.emptyTrack} />
    </div>
  );
}

function Track({ title, numb, feats }) {
  let featsString = "";
  if (feats.length) {
    featsString = feats.join(", ") + ".";
  }

  return (
    <div className={`${s.track}`}>
      <span className={s.trackNumb}>{numb}.</span>
      <div className={s.trackTitle}>
        {title}
        {feats.length ? (
          <span className={s.feats}>feat. {featsString}</span>
        ) : null}
      </div>
    </div>
  );
}
