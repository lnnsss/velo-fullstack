import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { RegistrationPage } from "../../components/Pages/RegistrationPage/RegistrationPage";

export default function Registration() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout title="Регистрация" currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
        <RegistrationPage currentTheme={currentTheme} />
    </PageLayout>
  );
}