import { useEffect, useState } from "react";

export function useDiscountTime() {
  const [time, setTime] = useState(28800); // 8 * 3600
  const [isRunning, setIsRunning] = useState(true);
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  // Таймер
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(interval);
          setIsRunning(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, time]);

  return { hours, minutes, seconds };
}
