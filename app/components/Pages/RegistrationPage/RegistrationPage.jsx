import { useState } from "react";
import s from "./RegistrationPage.module.css";
import { registrationURL } from "../../constants";
import Link from "next/link";

export function RegistrationPage({ currentTheme }) {
  
  const emptyFormData = {
    username: "",
    password: ""
  };
  
  const [formData, setFormData] = useState(emptyFormData);
  const [errorMessage, setErrorMessage] = useState(""); // Состояние для сообщений об ошибках
  const [successMessage, setSuccessMessage] = useState(""); // Состояние для сообщений об успехе

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); 

    const requestData = {
      username: formData.username,
      password: formData.password
    };

    try {
      const response = await fetch(registrationURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (!response.ok) {
        throw new Error("Ошибка регистрации. Попробуйте еще раз.");
      }
      
      setSuccessMessage("Регистрация прошла успешно!"); 
      setErrorMessage(""); 

      setFormData(emptyFormData);
    } catch (error) {
      setErrorMessage(error.message); 
      setSuccessMessage(""); 
    }
  };

  return (
    <div className={`${s.registrationPage} ${currentTheme ? s.nightTheme : ""}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <form action="" className={s.addForm} onSubmit={handleFormSubmit}>
            <div className={s.addForm_container}>
              <h3 className={s.formTittle}>Регистрация</h3>
              {errorMessage && <p className={s.error}>{errorMessage}</p>} 
              {successMessage && <p className={s.success}>{successMessage}</p>} 
              <label htmlFor="username" className={s.addFormLabel}>
                Логин
              </label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  className={s.addFormInput}
                  placeholder="ivanNumb1"
                  value={formData.username}
                  onChange={handleInputChange}
              />
              <label htmlFor="password" className={s.addFormLabel}>
                Пароль
              </label>
              <input
                  type="password" 
                  id="password"
                  name="password"
                  className={s.addFormInput}
                  placeholder="qwerty123"
                  value={formData.password}
                  onChange={handleInputChange}
              />
              <span className={s.alreadyHave}>Уже есть аккаунт? <Link className={s.toLogin} href="/auth/login">Авторизоваться</Link></span>
              <button type="submit" className={s.regBtn}>
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}