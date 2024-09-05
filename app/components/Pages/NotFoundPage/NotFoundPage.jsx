import Link from "next/link";
import s from "./NotFoundPage.module.css";
import Image from "next/image";

export function NotFoundPage() {
  return (
    <div className={s.error}>
      <Image src="/images/logo.png" width={40} height={40} />
      <h2>Такой страницы у нас нет:(</h2>
      <Link href="/" className={s.link}>На главную страницу</Link>
    </div>
  );
}
