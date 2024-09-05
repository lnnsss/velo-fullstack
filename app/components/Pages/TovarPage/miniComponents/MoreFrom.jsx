import Image from "next/image";
import s from "./../TovarPage.module.css";
import Link from "next/link";

export function MoreFrom({ artist, moreAlbums }) {
  const displayMoreAlbums = moreAlbums.map((el) => (
    <MoreAlbumItem
      key={el.id}
      id={el.id}
      cover={el.img.cover}
      title={el.title}
    />
  ));
  if (moreAlbums.length) {
    return (
      <div className={s.moreFrom}>
        <h2 className={s.tittle}>More From {artist.join(", ")}</h2>
        <div className={s.moreFrom_container}>{displayMoreAlbums}</div>
      </div>
    );
  } else {
    return null;
  }
}

function MoreAlbumItem({ id, cover, title }) {
  return (
    <Link href={`/catalog/${id}`}>
      <Image src={cover} title={title} width={220} height={220} alt={title} />
    </Link>
  );
}
