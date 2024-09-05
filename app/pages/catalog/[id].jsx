import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { useRouter } from "next/router";
import { TovarPage } from "../../components/Pages/TovarPage/TovarPage";
import {discount, langCondition, priceCondition} from "../../components/constants";

export default function tovar() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);
  const { finalTovarList, setFinalTovarList } = useContext(AppContext);

  const router = useRouter();
  const [tovar, setTovar] = useState(null);

  // поиск нужного товара
  useEffect(() => {
    const { id } = router.query;

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/tovarList/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.price >= priceCondition || data.lang === langCondition) {
          let newPrice = data.price - (data.price / 100) * discount; // Цена с учетом скидки
          data.discountPrice = Math.ceil(newPrice);
        }
        setTovar(data); // Присвоение товара в состояние
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();

  }, [router.query]);

  return (
    <PageLayout
      title={tovar ? tovar.title : "tovar"}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
      cartList={cartList}
    >
      {tovar ? (
        <TovarPage currentTheme={currentTheme} tovar={tovar} />
      ) : (
        <div className="mt-[250px] mx-auto w-10 text-xl text-bold">Loading...</div>
      )}
    </PageLayout>
  );
}
