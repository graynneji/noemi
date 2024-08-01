import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero({ src, name }) {
  return (
    <section className={styles.heroContainer}>
      {name && <h1 className={styles.hOne}>{name}</h1>}
      <Image
        src={src}
        fill
        placeholder="blur"
        alt="hero image"
        className={styles.heroImage}
        quality={100}
      />
    </section>
  );
}
