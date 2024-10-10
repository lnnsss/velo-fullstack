import s from "./AddPage.module.css";
import { Form } from "./miniComponents/Form";

export function AddPage({ currentTheme }) {
  return (
    <div className={`${s.addPage} ${currentTheme && s.nightTheme}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={s.addPage__title}>Добавить релиз</h2>
          <Form/>
        </div>
      </div>
    </div>
  );
}