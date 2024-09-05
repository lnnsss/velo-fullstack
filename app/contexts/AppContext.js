import { createContext, useState } from "react";
import {
  discount,
  filterList,
  theme,
  priceCondition,
  langCondition,
} from "../components/constants";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme); //  тема
  const [activeFilter, setActiveFilter] = useState(filterList[0]); //  фильтры для перебора товаров на странице catalog; по умолчанию "All"
  const [cartList, setCartList] = useState([]); // массив с товарами в корзине
  const [cartCounter, setCartCounter] = useState(0); // счетчик товаров в корзине
  const handleSetCartCounter = () => {
    setCartCounter(cartList.reduce((acc, obj) => acc + obj.count, 0));
  }; // функция для обновления счетчика товаров в корзине
  const [viewedAlbums, setViewedAlbums] = useState([]); // Просмотренные товары

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        activeFilter,
        setActiveFilter,
        cartList,
        setCartList,
        cartCounter,
        handleSetCartCounter,
        viewedAlbums,
        setViewedAlbums,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
