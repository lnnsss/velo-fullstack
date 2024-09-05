import s from "./../Header.module.css";

export function HeaderLayout({ children }) {
  return (
      <header className={s.header}>
        <div className={s.header_container}>
          <div className={s.header_body}>{children}</div>
        </div>
      </header>
  );
}
