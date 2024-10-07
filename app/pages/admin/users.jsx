import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AdminLayout } from "../../components/AdminLayout";
import { UsersPage } from "../../components/Pages/UsersPage/UsersPage";

export default function Users() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <AdminLayout
      title="Пользователи"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <UsersPage currentTheme={currentTheme} />
    </AdminLayout>
  );
}
