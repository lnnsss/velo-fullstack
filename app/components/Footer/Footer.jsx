import Image from "next/image";
import s from "./Footer.module.css";

import gh from "./socials/github.png";
import vk from "./socials/vk.png";
import inst from "./socials/inst.png";
import tg from "./socials/tg.png";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.footer_top}>
          <a className={s.footer_logo}>Velo</a>
          <div className={s.socials}>
            <FooterLink way={gh} href="https://github.com/lnnsss" />
            <FooterLink way={vk} href="https://vk.com/l1lines" />
            <FooterLink way={inst} href="https://www.instagram.com/@l1lines" />
            <FooterLink way={tg} href="https://t.me/l1lines" />
          </div>
        </div>
        <div className={s.footer_bottom}>
          <span>&copy; Все права защищены.</span>
          <a target="_blank" href="mailto:bezborodnikovtimur@gmail.com">
            bezborodnikovtimur@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ way, href }) {
  return (
    <a target="_blank" href={href}>
      <Image src={way} alt={way} className={s.soc} />
    </a>
  );
}
