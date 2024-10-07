import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AddPage } from "../../components/Pages/AddPage/AddPage";
import { AdminLayout } from "../../components/AdminLayout";

export default function Add() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <AdminLayout
      title="Добавить релиз"
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
    >
      <AddPage currentTheme={currentTheme} />
    </AdminLayout>
  );
}
