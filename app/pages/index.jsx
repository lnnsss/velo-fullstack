import { PageLayout } from "../components/PageLayout";
import { MainPage } from "../components/Pages/MainPage/MainPage";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function HomePage() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <PageLayout
      title="Velo"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <MainPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
