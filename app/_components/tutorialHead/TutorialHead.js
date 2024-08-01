import Image from "next/image";
import ImageContainer from "../imageContainer/ImageContainer";
import styles from "./tutorialHead.module.css";
import tutorials from "@/public/Bookkeeping.jpg";

export default function TutorialHead() {
  return (
    <section className={styles.tuthead}>
      <ImageContainer type="tutorials">
        <Image
          src={tutorials}
          placeholder="blur"
          className={styles.imgs}
          fill
          quality={100}
          alt="img3"
        />

        <div className={styles.triangle}></div>
      </ImageContainer>
      <div className={styles.flexing}>
        <div className={styles.hOne}>
          <h1>TUTORIALS</h1>
        </div>
        <span className={styles.tutSpan}>
          If you want to give accounting a try on your own or just educate
          yourself on the process, explore our tutorials below.
        </span>
      </div>
    </section>
  );
}
