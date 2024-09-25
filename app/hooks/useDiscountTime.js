import { useEffect, useState } from "react";

export function useDiscountTime() {

  const initialTime = 28800; // 8 * 3600

  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("veloTimer");
    return savedTime !== null ? parseInt(savedTime, 10) : initialTime;
  });

  const [isRunning, setIsRunning] = useState(true);

  // Расчет часов, минут и секунд
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            const newTime = prevTime - 1;
            localStorage.setItem("veloTimer", newTime); // Обновляем localStorage с новым значением
            return newTime;
          } else {
            const resetTime = initialTime; 
            localStorage.setItem("veloTimer", resetTime); 
            return resetTime; 
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return { hours, minutes, seconds };
}
