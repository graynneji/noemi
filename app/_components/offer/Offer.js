import Image from "next/image";
import second from "@/public/2ND PICTURE HOME PAGE.jpg";
import styles from "./offer.module.css";
import ImageContainer from "../imageContainer/ImageContainer";

export default function Offer() {
  return (
    <section className={styles.offerSection}>
      <div className={styles.offerText}>
        We are a boutique accounting firm looking to deliver
        accounting/bookkeeping on a personable level to small & medium business
        owners. Our goal is to empower owners to achieve financial clarity,
        growth, and peace of mind.
      </div>
      {/* <div className={styles.imaageContainer}> */}
      <ImageContainer type="home">
        <Image
          src={second}
          placeholder="blur"
          className={styles.secondImage}
          fill
          // style={{ width: "100%", height: "100%" }}
          // sizes="100vw"
          alt="Book keeping"
          quality={100}
        />
      </ImageContainer>
      {/* </div> */}
    </section>
  );
}
