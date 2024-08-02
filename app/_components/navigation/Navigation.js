"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  NavMenuProvider,
  useNav,
  useNavMenu,
} from "@/app/context/NavMenuContext";

export default function Navigation() {
  const { open, setOpen } = useNavMenu();
  console.log(open);
  return (
    <NavMenuProvider>
      <nav className={styles.nav} style={{ backgroundColor: "#f3f7f2" }}>
        <div className={styles.logo}>
          <Image
            src="/logoAC.png"
            height={23}
            width={12}
            quality={100}
            className={styles.imges}
            alt="Logo Accountibility"
          />
          <Image
            src="/logoTEXTnew_bleu.png"
            height={20}
            width={100}
            alt="logo text"
            className={styles.imges}
            quality={100}
          />
        </div>
        <ul className={styles.links}>
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/about">
            <li>ABOUT</li>
          </Link>
          <Link href="/services">
            <li>SERVICES</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>

        <GiHamburgerMenu
          className={styles.mobileMenu}
          onClick={() => setOpen(!open)}
        />
      </nav>
    </NavMenuProvider>
  );
}
