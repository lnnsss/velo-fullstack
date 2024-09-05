import { useState } from "react";

export function useCoverFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return { isFullScreen, toggleFullScreen };
}
