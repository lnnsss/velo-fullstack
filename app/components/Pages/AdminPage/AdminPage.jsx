import s from "./AdminPage.module.css";

export function AdminPage({ currentTheme }) {
  return (
    <div className={`${s.adminPage} ${currentTheme && `${s.nightTheme}`}`}>
      a
    </div>
  );
}
