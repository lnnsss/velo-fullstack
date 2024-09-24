import { createContext, useState } from "react";
import {
  filterList,
  theme
} from "../components/constants";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme); //  тема
  const [activeFilter, setActiveFilter] = useState(filterList[0]); //  фильтры для перебора товаров на странице catalog; по умолчанию "All"

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        setCurrentTheme,
        activeFilter,
        setActiveFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
