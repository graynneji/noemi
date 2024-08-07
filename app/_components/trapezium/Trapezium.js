import styles from "./trapezium.module.css";

export default function Trapezium() {
  return (
    <>
      <div className={styles.trapezium}>
        {/* <h3 className={styles.hThree}>Explore our different service options</h3> */}
      </div>
      <div className={styles.helperDiv}>
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
      </div>
    </>
  );
}
