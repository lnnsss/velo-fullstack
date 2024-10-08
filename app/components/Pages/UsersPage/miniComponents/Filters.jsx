import { useState } from "react";
import s from "./../UsersPage.module.css";

export function Filters({ filterList, activeFilter, setActiveFilter }) {
  const displayFilters = filterList.map((filter, i) => (
    <Filter
      filterName={filter}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
      key={i}
    />
  ));

  return <>{displayFilters}</>;
}

function Filter({ filterName, activeFilter, setActiveFilter }) {
  const filterIsActive = activeFilter === filterName;

  return (
    <button
      className={`${s.filter} ${filterIsActive && s.active}`}
      onClick={() => setActiveFilter(filterName)}
    >
      {filterName}
    </button>
  );
}