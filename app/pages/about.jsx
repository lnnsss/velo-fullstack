import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AboutPage } from "../components/Pages/AboutPage/AboutPage";
import { PageLayout } from "../components/PageLayout";

export default function About() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <PageLayout
      title="О нас"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <AboutPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
