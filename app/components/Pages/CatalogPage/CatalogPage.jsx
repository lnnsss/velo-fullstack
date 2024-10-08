import { CatalogLayout } from "./miniComponents/CatalogLayout";
import { CatalogHeader } from "./miniComponents/CatalogHeader";
import { Tovars } from "./miniComponents/Tovars";
import { useState } from "react";
import { catalogFilterList } from "../../constants";

export function CatalogPage({ currentTheme, activeFilter, setActiveFilter }) {
  // Фильтр по введенным данным
  const [inputValue, setInputValue] = useState("");
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CatalogLayout currentTheme={currentTheme}>
      <CatalogHeader
        filterList={catalogFilterList}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        inputValue={inputValue}
        handleChangeInputValue={handleChangeInputValue}
      />
      <Tovars activeFilter={activeFilter} inputValue={inputValue} />
    </CatalogLayout>
  );
}
