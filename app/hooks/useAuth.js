import { useEffect, useState } from "react";

export function useAuth() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    setUserIsLoggedIn(token !== '0');
  }, []);

  return userIsLoggedIn;
}