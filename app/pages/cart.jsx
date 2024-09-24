import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { CartPage } from "../components/Pages/CartPage/CartPage";
import { PageLayout } from "../components/PageLayout";

export default function Cart() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout
      title="Корзина"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <CartPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
