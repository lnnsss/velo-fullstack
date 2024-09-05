import s from "./../CatalogPage.module.css";

export function Filter({ children, activeFilter, setActiveFilter }) {
  return (
    <div
      key={children}
      className={`${s.filter} ${
        activeFilter === children ? `${s.active}` : ""
      }`}
      onClick={() => setActiveFilter(children)}
    >
      {children}
    </div>
  );
}
