import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { TovarPage } from "../../components/Pages/TovarPage/TovarPage";
import { discount, langCondition, priceCondition, tovarListURL } from "../../components/constants";

export default function Tovar({ tovar }) {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout
      title={tovar ? tovar.title : "tovar"}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
      cartList={cartList}
    >
      {tovar 
      ? (
        <TovarPage currentTheme={currentTheme} tovar={tovar} />
      )
      : (
        <div className="mt-[250px] mx-auto w-10 text-xl text-bold">Loading...</div>
      )}
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params; // Получаем id из параметров URL
  const response = await fetch(`${tovarListURL}/${id}`);

  // Check if the response is OK (status code 200)
  if (!response.ok) {
    return {
      notFound: true, // Redirect to 404 page if the product doesn't exist
    };
  }

  const data = await response.json();

  // Additional checks for price and language condition
  if (data.price >= priceCondition || data.lang === langCondition) {
    let newPrice = data.price - (data.price / 100) * discount; // Цена с учетом скидки
    data.discountPrice = Math.ceil(newPrice);
  }

  return {
    props: {
      tovar: data, // Передаем товар как пропс
    },
  };
}
