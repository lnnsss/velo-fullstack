import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { TovarPage } from "../../components/Pages/TovarPage/TovarPage";
import {
  discount,
  langCondition,
  priceCondition,
  tovarListURL,
} from "../../components/constants";

export default function Tovar({ tovar }) {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout
      title={tovar ? tovar.title : "tovar"}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      {tovar ? (
        <TovarPage currentTheme={currentTheme} tovar={tovar} />
      ) : (
        <div className="mt-[250px] mx-auto w-10 text-xl text-bold">
          Loading...
        </div>
      )}
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`${tovarListURL}/${id}`);

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const data = await response.json();

  if (data.price >= priceCondition || data.lang === langCondition) {
    let newPrice = data.price - (data.price / 100) * discount; // Цена с учетом скидки
    data.discountPrice = Math.ceil(newPrice);
  }

  return {
    props: {
      tovar: data,
    },
  };
}
