import styles from "./button.module.css";
const typeStyles = {
  send: styles.send,
  services: styles.services,
};
export default function Button({ children, type }) {
  const className = typeStyles[type] || "";
  return <div className={`${styles.btn} ${className}`}>{children}</div>;
}