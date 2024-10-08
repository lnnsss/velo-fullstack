import { useState } from "react";
import s from "./UsersPage.module.css";
import { FilterInput } from "./miniComponents/FilterInput";
import { Filters } from "./miniComponents/Filters";
import { adminUsersFilterList, userListURL } from "../../constants";
import { UserList } from "./miniComponents/UserList";
import Modal from "react-modal";
import { DelUserModal } from "./miniComponents/modals/DelUserModal";
import { AddAdminModal } from "./miniComponents/modals/AddAdminModal";
import { DelAdminModal } from "./miniComponents/modals/DelAdminModal";

const customStyles = {
  overlay: {
    background: "rgba(42, 42, 42, 0.2)",
    backdropFilter: "blur(8px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
  },
};

export function UsersPage({ currentTheme }) {
  const [userListData, setUserListData] = useState([]); // сюда фетчим
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [modalType, setModalType] = useState(null); // Состояние для управления модалками
  const [modalData, setModalData] = useState(null); // Состояние для управления модалками
  const token = localStorage.getItem("veloJWT");

  const openModal = ({ type, userId }) => {
    setModalType(type);
    setModalData(userId);
  };
  const closeModal = () => setModalType(null);

  function handleChangeInputValue(e) {
    setInputValue(e.target.value);
  }

  // удаление пользователя по айди
  const deleteUserById = async (id) => {
    try {
      const response = await fetch(`${userListURL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setUserListData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // сделать пользователя администратором
  const addAdmin = async (id) => {
    try {
      const response = await fetch(`${userListURL}/${id}/roles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "ADMIN",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // отнять у пользователя админку
  const delAdmin = async (id) => {
    try {
      const response = await fetch(`${userListURL}/${id}/roles`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          role: "ADMIN",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
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
            <UserList
              inputValue={inputValue}
              activeFilter={activeFilter}
              openModal={openModal}
              userListData={userListData}
              setUserListData={setUserListData}
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={
          modalType === "addAdminModal" ||
          modalType === "delAdminModal" ||
          modalType === "delUserModal"
        }
        onRequestClose={closeModal}
        style={customStyles}
      >
        {modalType === "addAdminModal" && (
          <AddAdminModal
            closeModal={closeModal}
            addAdmin={addAdmin}
            userId={modalData}
          />
        )}
        {modalType === "delAdminModal" && (
          <DelAdminModal
            closeModal={closeModal}
            delAdmin={delAdmin}
            userId={modalData}
          />
        )}
        {modalType === "delUserModal" && (
          <DelUserModal
            closeModal={closeModal}
            deleteUserById={deleteUserById}
            userId={modalData}
          />
        )}
      </Modal>
    </>
  );
}
