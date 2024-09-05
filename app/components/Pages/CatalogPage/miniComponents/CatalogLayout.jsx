import s from "./../CatalogPage.module.css";

export function CatalogLayout({ children, currentTheme }) {
  return (
    <div className={`${s.catalogPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt}`}>Каталог</h2>
          {children}
        </div>
      </div>
    </div>
  );
}
