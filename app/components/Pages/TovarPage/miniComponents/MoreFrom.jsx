import Image from "next/image";
import s from "./../TovarPage.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { tovarListURL } from "../../../constants";

export function MoreFrom({ artist, title }) {
  const [moreAlbums, setMoreAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${tovarListURL}?artist=${artist.join(",")}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Фильтруем альбомы по артисту и исключаем текущий альбом
        const filteredData = data.filter(item => 
          item.title !== title && artist.some(a => item.artist.includes(a))
        );

        setMoreAlbums(filteredData); // Присвоение массива в состояние
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [artist, title]);

  // остальные релизы этого исполнителя(ей) на сайте

  const displayMoreAlbums = moreAlbums.map((el) => (
    <MoreAlbumItem
      key={el._id}
      id={el._id}
      cover={el.img[0]}
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