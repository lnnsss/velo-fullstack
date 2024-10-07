import {AdminHeader} from "../components/Header/AdminHeader";
import {Footer} from "../components/Footer/Footer";
import clsx from "clsx";
import Head from "next/head";

export function AdminLayout({ children, currentTheme, setCurrentTheme, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={clsx("min-h-screen flex flex-col")}>
                <AdminHeader
                    currentTheme={currentTheme}
                    setCurrentTheme={setCurrentTheme}
                />
                <main
                    className={clsx(
                        "flex-grow transition duration-500", // flex-grow растягивает main
                        currentTheme ? "nightTheme" : "bg-white"
                    )}
                >
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
