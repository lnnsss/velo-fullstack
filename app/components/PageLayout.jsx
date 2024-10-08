import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { getUserIsAdmin } from "../utils/getUserIsAdmin";
import { useEffect } from "react";

export function PageLayout({ children, currentTheme, setCurrentTheme, title }) {
  const token = localStorage.getItem("veloJWT");
  const userIsAdmin = getUserIsAdmin(token);
  const router = useRouter();

  // если пользователь - админ, то перенаправляем в админ-панель
  useEffect(() => {
    if (userIsAdmin) {
      router.push("/admin");
    }
  }, [userIsAdmin, router]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={clsx("min-h-screen flex flex-col")}>
        <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
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
