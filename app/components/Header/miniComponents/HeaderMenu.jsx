import { useEffect, useState } from "react";
import s from "./../Header.module.css";
import Link from "next/link";
import Image from "next/image";
import dayTheme from "./../images/dayIcon.png";
import nightTheme from "./../images/nightIcon.png";
import account from "./../images/account.png";
import { useAuth } from "../../../hooks/useAuth";

export function HeaderMenu({
  currentTheme,
  setCurrentTheme,
  burgerActive,
  cartList,
  cartCounter,
}) {
  const userIsLoggedIn = useAuth();

  return (
    <nav className={`${s.header_menu} ${burgerActive && s.active}`}>
      <ul className={s.header_list}>
        <HeaderLink href="/catalog">Каталог</HeaderLink>
        <HeaderLink href="/cart">
          Корзина
          {cartList.length ? (
            <div className={s.korzinaCounter}>{cartCounter}</div>
          ) : (
            ""
          )}
        </HeaderLink>
        <HeaderLink href="/reviews">Отзывы</HeaderLink>
        <HeaderLink href="/about">О наc</HeaderLink>
        <HeaderLink href="/add">Добавить</HeaderLink>
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
      <Image src={account} alt="account" className={s.header_themeImg} title="Регистрация" />
    </HeaderLink>
  );
}

function AccountHeaderLink() {
  return (
    <HeaderLink href="/account">
      <Image src={account} alt="account" className={s.header_themeImg} title="Мой аккаунт" />
    </HeaderLink>
  );
}