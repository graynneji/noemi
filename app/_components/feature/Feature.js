import styles from "./feature.module.css";
export default function Feature({ children }) {
  return <section className={styles.feature}>{children}</section>;
}
