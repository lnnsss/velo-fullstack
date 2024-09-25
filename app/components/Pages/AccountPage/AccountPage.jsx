import { useRouter } from "next/router";
import s from "./AccountPage.module.css";

export function AccountPage({ currentTheme }) {
  const router = useRouter();
  
  function logOut() {
    localStorage.setItem("veloJWT", 0);
    router.push("/auth/registration");
  }

  return (
    <div className={`${s.accountPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt} ${s.accountTittle}`}>
            Юзер
          </h2>
          <button onClick={() => logOut()} className={s.leftTxt}>
            Bыйти
          </button>
        </div>
      </div>
    </div>
  );
}
