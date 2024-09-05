import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function useViewedAlbums() {
  const { viewedAlbums, setViewedAlbums } = useContext(AppContext);
  const toggleViewAlbum = (album) => {
    setViewedAlbums([...viewedAlbums, album]);
    console.log(viewedAlbums);
  };

  return { viewedAlbums, toggleViewAlbum };
}
