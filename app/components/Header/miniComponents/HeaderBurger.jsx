import s from "./../Header.module.css";

export function HeaderBurger({ burgerActive, setBurgerActive }) {
  return (
    <div
      className={`${s.header_burger} ${burgerActive && s.active}`}
      onClick={() => setBurgerActive(!burgerActive)}
    >
      <span></span>
    </div>
  );
}
