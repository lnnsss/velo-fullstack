import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { HeaderBurger } from "./miniComponents/HeaderBurger";
import { HeaderLayout } from "./miniComponents/HeaderLayout";
import { AdminHeaderMenu } from "./miniComponents/HeaderMenu";
import { AdminHeaderLogo } from "./miniComponents/HeaderLogo";

export function AdminHeader() {
    const [burgerActive, setBurgerActive] = useState(false);
    const { currentTheme, setCurrentTheme } = useContext(AppContext);

    return (
        <HeaderLayout>
            <AdminHeaderLogo />
            <HeaderBurger
                burgerActive={burgerActive}
                setBurgerActive={setBurgerActive}
            />
            <AdminHeaderMenu
                burgerActive={burgerActive}
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
            />
        </HeaderLayout>
    );
}