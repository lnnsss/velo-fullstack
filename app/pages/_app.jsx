import "../styles/global.css";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { HashRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { useIsClient } from "../hooks/useIsClient";

export default function App({ Component, pageProps }) {
  const isClient = useIsClient();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isClient ? (
        <HashRouter>
          <AppProvider>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
          </AppProvider>
        </HashRouter>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
