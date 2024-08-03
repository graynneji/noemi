import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero({ src, name, text }) {
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
      {text && (
        <div className={styles.hOneContainer}>
          <div className={styles.leave}>
            <h1>Leave the numbers to us</h1>
          </div>
          <div>
            <h3 className={styles.hThree}>
              Explore our different service options
            </h3>
          </div>
        </div>
      )}
    </section>
  );
}
