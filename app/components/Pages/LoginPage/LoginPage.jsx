import { useState } from "react";
import s from "./LoginPage.module.css";
import { loginURL } from "../../constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { getUserIsAdmin } from "../../../utils/getUserIsAdmin";

export function LoginPage({ currentTheme }) {
  const router = useRouter();

  const emptyFormData = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      username: formData.login,
      password: formData.password,
    };

    try {
      const response = await fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Ошибка авторизации. Проверьте логин и пароль.");
      }

      const data = await response.json();
      localStorage.setItem("veloJWT", data.token);
      setSuccessMessage("Авторизация прошла успешно!");
      setErrorMessage("");

      setFormData(emptyFormData);

      // действие взависимости от роли пользователя
      const userIsAdmin = getUserIsAdmin(data.token);
      userIsAdmin ? router.push("/admin") : router.push("/account");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  return (
    <div className={`${s.loginPage} ${currentTheme ? s.nightTheme : ""}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <form action="" className={s.addForm} onSubmit={handleFormSubmit}>
            <div className={s.addForm_container}>
              <h3 className={s.formTittle}>Авторизация</h3>
              {errorMessage && <p className={s.error}>{errorMessage}</p>}{" "}
              {/* Отображение сообщения об ошибке */}
              {successMessage && (
                <p className={s.success}>{successMessage}</p>
              )}{" "}
              {/* Отображение сообщения об успехе */}
              <label htmlFor="login" className={s.addFormLabel}>
                Логин
              </label>
              <input
                type="text"
                id="login"
                name="login"
                className={s.addFormInput}
                placeholder="ivanNumb1"
                value={formData.login}
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
              <span className={s.alreadyHave}>
                Еще нет аккаунта?{" "}
                <Link className={s.toReg} href="/auth/registration">
                  Зарегистрироваться
                </Link>
              </span>
              <button type="submit" className={s.logBtn}>
                Авторизоваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
