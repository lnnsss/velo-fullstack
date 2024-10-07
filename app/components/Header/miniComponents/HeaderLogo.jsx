import Link from "next/link";
import s from "./../Header.module.css";

export function HeaderLogo() {
  return (
    <Link href="/" className={s.header_logo}>
      &#9733;-&#9733;
    </Link>
  );
}

export function AdminHeaderLogo() {
  return (
    <Link href="/admin" className={s.header_logo}>
      &#9733;-&#9733;
    </Link>
  );
}