import s from "./../UsersPage.module.css";

export function FilterInput({ inputValue, handleChangeInputValue }) {
  return (
    <input
      type="text"
      className={s.input}
      value={inputValue}
      placeholder="Username..."
      onChange={handleChangeInputValue}
    />
  );
}
