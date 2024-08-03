import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero({ src, name }) {
  return (
    <section className={styles.heroContainer}>
      <Image
        src={src}
        // fill
        // width={100}
        // height="500px"
        placeholder="blur"
        alt="hero image"
        // className={styles.heroImage}
        style={{ width: "100%", height: "auto" }}
        quality={100}
      />
      {name && <h1 className={styles.hOne}>{name}</h1>}
    </section>
  );
}
