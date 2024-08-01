import Link from "next/link";
import Image from "next/image";
import styles from "./navigation.module.css";
export default function Navigation() {
  return (
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
          src="/logoTEXTnew_WHITE.png"
          height={23}
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
        <Link href="/press">
          <li>PRESS</li>
        </Link>
        <Link href="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
}
