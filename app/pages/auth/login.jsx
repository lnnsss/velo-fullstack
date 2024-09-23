import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { LoginPage } from "../../components/Pages/LoginPage/LoginPage";

export default function Login() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout title="Авторизация" currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <LoginPage currentTheme={currentTheme} />
    </PageLayout>
  );
}