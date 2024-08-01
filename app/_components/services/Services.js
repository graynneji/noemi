import Image from "next/image";
import styles from "./services.module.css";
import consulting from "@/public/Consulting.jpg";
import financing from "@/public/Financial.jpg";
import bookkeeping from "@/public/Bookkeeping.jpg";
import ImageContainer from "../imageContainer/ImageContainer";
export default function Services() {
  return (
    <section className={styles.servicesContainer}>
      <p className={styles.servicesParah}>
        Big or small, we are ready to keep your accounting transition seamless.
        We offer a range of accounting services that are adaptable to your
        business needs. Our services include, and are not limited to:
      </p>
      <div className={styles.colImage}>
        <ImageContainer type="services">
          <Image
            src={consulting}
            placeholder="blur"
            className={styles.imgs}
            fill
            quality={100}
            alt="img1"
          />
        </ImageContainer>
        <ImageContainer type="services">
          <Image
            src={financing}
            placeholder="blur"
            className={styles.imgs}
            fill
            quality={100}
            alt="img2"
          />
        </ImageContainer>
        <ImageContainer type="services">
          <Image
            src={bookkeeping}
            placeholder="blur"
            className={styles.imgs}
            fill
            quality={100}
            alt="img3"
          />
        </ImageContainer>
      </div>
    </section>
  );
}
