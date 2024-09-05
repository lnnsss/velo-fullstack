import s from "./../CatalogPage.module.css";
import { Filter } from "./Filter";

export function CatalogHeader({
  filterList,
  activeFilter,
  setActiveFilter,
  inputValue,
  handleChangeInputValue,
}) {
  // Фильтры
  const displayFilterList = filterList.map((el, index) => (
    <Filter
      key={index}
      children={el}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />
  ));

  return (
    <div className={s.catalog_header}>
      <h2 className={`${s.tittle} ${s.leftTxt}`}>Альбомы</h2>
      <div className={s.filters}>
        {displayFilterList}
        <input
          type="text"
          value={inputValue}
          className={s.filterInput}
          placeholder="LILDRUGHILL"
          onChange={handleChangeInputValue}
        />
      </div>
    </div>
  );
}
