import { useEffect, useState } from "react";
import s from "./../UsersPage.module.css";
import { User } from "./User";

export function UserList({ inputValue }) {
  const [userListData, setUserListData] = useState([
    {
      username: "lnnsss",
      roles: ["USER", "ADMIN"],
    },
    {
      username:
        "TIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMURTIMUR",
      roles: ["USER"],
    },
    {
      username: "rusel116",
      roles: ["USER"],
    },
    {
      username: "obladaet",
      roles: ["USER"],
    },
    {
      username: "oxxxymironFromLondon",
      roles: ["USER"],
    },
  ]);
  const [userList, setUserList] = useState([]);

  // Фильтрация юзеров по инпуту
  useEffect(() => {
    if (userListData.length > 0) {
      const filteredList = userListData.filter((user) => {
        let isMatch = true;

        if (inputValue) {
          isMatch =
            user.username.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        }

        return isMatch;
      });
      setUserList(filteredList);
    }
  }, [userListData, inputValue]);

  const displayUsers = userList.map((user, i) => <User user={user} key={i} />);

  return (
    <div className={s.userList} id="userList">
      {displayUsers}
    </div>
  );
}