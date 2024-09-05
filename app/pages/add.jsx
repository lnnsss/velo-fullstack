import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AddPage } from "../components/Pages/AddPage/AddPage";
import { PageLayout } from "../components/PageLayout";

export default function Add() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout title="Добавить релиз" currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <AddPage
        currentTheme={currentTheme}
      />
    </PageLayout>
  );
}
