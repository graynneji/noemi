import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero({ src }) {
  return (
    <section className={styles.heroContainer}>
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
