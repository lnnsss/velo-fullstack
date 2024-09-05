import s from "./../Header.module.css";
import dayTheme from "./../images/dayIcon.png";
import nightTheme from "./../images/nightIcon.png";
import Image from "next/image";
import Link from "next/link";
import {usePopupManager} from "../../../hooks/usePopupManager";

export function HeaderMenu({currentTheme, setCurrentTheme, burgerActive, cartList, cartCounter,}) {
    const {handleToReg} = usePopupManager();

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
                <li>
          <span className={s.header_link} onClick={handleToReg}>
            Аккаунт
          </span>
                </li>
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

function HeaderLink({href, children}) {
    return (
        <li>
            <Link href={href} className={s.header_link}>
                {children}
            </Link>
        </li>
    );
}