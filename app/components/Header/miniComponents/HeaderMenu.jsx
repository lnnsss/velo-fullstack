import s from "./../Header.module.css";
import Link from "next/link";
import Image from "next/image";
import dayTheme from "./../images/dayIcon.png";
import nightTheme from "./../images/nightIcon.png";
import account from "./../images/account.png";
import { useAuth } from "../../../hooks/useAuth";
import useFetchCart from "../../../hooks/useFetchCart";
import { useRouter } from "next/router";

export function HeaderMenu({ currentTheme, setCurrentTheme, burgerActive }) {
  const userIsLoggedIn = useAuth();
  const token = localStorage.getItem("veloJWT");
  const { cartList } = useFetchCart(token);
  const cartCounter = cartList.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className={`${s.header_menu} ${burgerActive && s.active}`}>
      <ul className={s.header_list}>
        <HeaderLink href="/catalog">Каталог</HeaderLink>
        <HeaderLink href="/cart">
          Корзина
          {cartCounter > 0 && (
            <div className={s.korzinaCounter}>{cartCounter}</div>
          )}
        </HeaderLink>
        <HeaderLink href="/reviews">Отзывы</HeaderLink>
        <HeaderLink href="/about">О нас</HeaderLink>
        {userIsLoggedIn ? <AccountHeaderLink /> : <RegistrationHeaderLink />}
        <li className={s.header_link} id="themeBtn">
          <Image
            src={currentTheme ? nightTheme : dayTheme}
            alt="theme"
            className={s.header_themeImg}
            onClick={() => setCurrentTheme(!currentTheme)}
          />
        </li>
      </ul>
    </nav>
  );
}

export function AdminHeaderMenu({
  currentTheme,
  setCurrentTheme,
  burgerActive,
}) {

  return (
    <nav className={`${s.header_menu} ${burgerActive && s.active}`}>
      <ul className={s.header_list}>
        <HeaderLink href="/admin/users">Пользователи</HeaderLink>
        <HeaderLink href="/admin/add">Добавить релиз</HeaderLink>
        <LogOutHeaderLink />
        <li className={s.header_link} id="themeBtn">
          <Image
            src={currentTheme ? nightTheme : dayTheme}
            alt="theme"
            className={s.header_themeImg}
            onClick={() => setCurrentTheme(!currentTheme)}
          />
        </li>
      </ul>
    </nav>
  );
}

function HeaderLink({ href, children }) {
  return (
    <li>
      <Link href={href} className={s.header_link}>
        {children}
      </Link>
    </li>
  );
}

function RegistrationHeaderLink() {
  return (
    <HeaderLink href="/auth/registration">
      <Image
        src={account}
        alt="account"
        className={s.header_themeImg}
        title="Регистрация"
      />
    </HeaderLink>
  );
}

function AccountHeaderLink() {
  return (
    <HeaderLink href="/account">
      <Image
        src={account}
        alt="account"
        className={s.header_themeImg}
        title="Мой аккаунт"
      />
    </HeaderLink>
  );
}

function LogOutHeaderLink() {
  const router = useRouter();

  function logOut() {
    localStorage.setItem("veloJWT", 0);
    router.push("/auth/registration");
  }

  return <button className={s.header_link} onClick={() => logOut()}>Выйти</button>;
}