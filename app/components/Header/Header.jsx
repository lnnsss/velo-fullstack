import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { HeaderMenu } from "./miniComponents/HeaderMenu";
import { HeaderBurger } from "./miniComponents/HeaderBurger";
import { HeaderLogo } from "./miniComponents/HeaderLogo";
import { HeaderLayout } from "./miniComponents/HeaderLayout";

export function Header({ cartList }) {
    const [burgerActive, setBurgerActive] = useState(false);
    const { currentTheme, setCurrentTheme } = useContext(AppContext);

    return (
        <HeaderLayout>
            <HeaderLogo />
            <HeaderBurger
                burgerActive={burgerActive}
                setBurgerActive={setBurgerActive}
            />
            <HeaderMenu
                burgerActive={burgerActive}
                cartList={cartList}
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
        </HeaderLayout>
    );
}
