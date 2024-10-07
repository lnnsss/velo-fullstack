import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AdminPage } from "../../components/Pages/AdminPage/AdminPage";
import { AdminLayout } from "../../components/AdminLayout";

export default function Admin() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

    return (
        <AdminLayout
          title="Admin"
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        >
          <AdminPage currentTheme={currentTheme} />
        </AdminLayout>
    )
}