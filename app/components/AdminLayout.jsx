import { AdminHeader } from "../components/Header/AdminHeader";
import { Footer } from "../components/Footer/Footer";
import clsx from "clsx";
import Head from "next/head";
import { getUserIsAdmin } from "../utils/getUserIsAdmin";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function AdminLayout({
  children,
  currentTheme,
  setCurrentTheme,
  title,
}) {
  const token = localStorage.getItem("veloJWT");
  const userIsAdmin = getUserIsAdmin(token);
  const router = useRouter();

  useEffect(() => {
    if (!userIsAdmin) {
      router.push("/");
    }
  }, [userIsAdmin, router]);

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
            "flex-grow transition duration-500",
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
