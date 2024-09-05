import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import clsx from "clsx";
import Head from "next/head";

export function PageLayout({children, currentTheme, setCurrentTheme, cartList, title,}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={clsx("min-h-screen")}>
                <Header
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                    cartList={cartList}
                />
                <main
                    className={clsx(
                        "min-h-screen transition duration-500",
                        currentTheme ? "bg-second-black" : "bg-white"
                    )}
                >
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    );
}