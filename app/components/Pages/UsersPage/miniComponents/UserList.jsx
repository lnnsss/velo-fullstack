import { useEffect, useState } from "react";
import s from "./../UsersPage.module.css";
import { User } from "./User";
import { userListURL } from "../../../constants";

export function UserList({ inputValue, activeFilter, openModal, userListData, setUserListData }) {
  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem("veloJWT");

  // Получение userListData
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userListURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setUserListData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // Фильтрация юзеров по inputValue
  useEffect(() => {
    if (userListData.length > 0) {
      const filteredList = userListData.filter((user) => {
        let isMatch = true;

        if (inputValue) {
          isMatch =
            user.username.toLowerCase().indexOf(inputValue.toLowerCase()) !==
            -1;
        }

        if (activeFilter === "ADMIN") {
          isMatch = user.roles.includes("ADMIN") && isMatch;
        }

        if (activeFilter === "USER") {
          isMatch = !user.roles.includes("ADMIN") && isMatch;
        }

        return isMatch;
      });
      setUserList(filteredList);
    }
  }, [userListData, inputValue, activeFilter]);

  const sortedUsers = userList.sort(
    (a, b) => b.roles.includes("ADMIN") - a.roles.includes("ADMIN")
  ); // сортировка: сначала админы
  const displayUsers = sortedUsers.map((user, i) => (
    <User
      user={user}
      key={i}
      openModal={openModal}
    />
  ));

  return (
    <div className={s.userList} id="userList">
      {displayUsers}
    </div>
  );
}
