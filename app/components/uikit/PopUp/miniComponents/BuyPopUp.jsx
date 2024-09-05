import s from "./../PopUp.module.css";

export function BuyPopUp({ handleBuyPopupClose }) {
  return (
    <form action="" className={s.form}>
      <h3 className={s.tittle}>Покупка</h3>
      <label htmlFor="adress" className={s.formLabel}>
        Адрес
      </label>
      <input
        id="adress"
        type="text"
        placeholder="г. Альметьевск, ул. Ахмадиева 9, кв. 13"
        className={s.formInput}
      />
      <label htmlFor="phone" className={s.formLabel}>
        Телефон
      </label>
      <input
        id="phone"
        type="text"
        placeholder="+79123456789"
        className={s.formInput}
      />
      <button className={s.formBtn}>Купить</button>
    </form>
  );
}
