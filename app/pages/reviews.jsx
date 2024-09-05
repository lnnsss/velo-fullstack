import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ReviewsPage } from "../components/Pages/ReviewsPage/ReviewsPage";
import { PageLayout } from "../components/PageLayout";

export default function Reviews() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout title="Отзывы" currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <ReviewsPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
