import { useState } from "react";
import s from "./UsersPage.module.css";
import { FilterInput } from "./miniComponents/FilterInput";
import { Filters } from "./miniComponents/Filters";
import { adminUsersFilterList } from "../../constants";
import { UserList } from "./miniComponents/UserList";

export function UsersPage({ currentTheme }) {
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  function handleChangeInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className={`${s.usersPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <div className={s.userHeader}>
            <h2 className={s.tittle}>Пользователи</h2>
            <div className={s.filters}>
              <Filters
                filterList={adminUsersFilterList}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <FilterInput
                inputValue={inputValue}
                handleChangeInputValue={handleChangeInputValue}
              />
            </div>
          </div>
          <UserList inputValue={inputValue} activeFilter={activeFilter} />
        </div>
      </div>
    </div>
  );
}
