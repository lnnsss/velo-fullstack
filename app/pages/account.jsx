import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import { AccountPage } from "../components/Pages/AccountPage/AccountPage";
import { PageLayout } from "../components/PageLayout";
import * as jwt_decode from "jwt-decode";

export default function Account() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  useEffect(() => {
    // Проверка, выполняется ли код на клиенте
    if (typeof window !== "undefined") {
      const jwtToken = localStorage.getItem("veloJWT");
      if (jwtToken) {
        try {
          const decodedToken = jwt_decode(jwtToken);
        } catch (error) {
          console.error("Ошибка декодирования токена:", error);
        }
      }
    }
  }, []);

  return (
    <PageLayout
      title="Аккаунт"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <AccountPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
