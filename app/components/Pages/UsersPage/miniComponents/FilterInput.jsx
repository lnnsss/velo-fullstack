import s from "./../UsersPage.module.css";
import { useState } from "react";

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
