import reactLogo from "@/assets/react.svg";
import styles from "./styles.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <a href="/" className={styles["link-logo-wrapper"]} aria-label="logo">
        <img src={reactLogo} className={styles["logo"]} alt="React logo" />
        React Suspense Sample
      </a>

      <nav className={styles["nav"]}>
        <a href="/01_sample" className={styles["nav-item"]}>
          01
        </a>
        <a href="/02_sample" className={styles["nav-item"]}>
          02
        </a>
        <a href="/03_sample" className={styles["nav-item"]}>
          03
        </a>
        <a href="/04_sample" className={styles["nav-item"]}>
          04
        </a>
        <a href="/05_sample" className={styles["nav-item"]}>
          05
        </a>
        <a href="/06_sample" className={styles["nav-item"]}>
          06
        </a>
        <a href="/07_sample" className={styles["nav-item"]}>
          07
        </a>
        <a href="/08_sample" className={styles["nav-item"]}>
          08
        </a>
        <a href="/09_sample" className={styles["nav-item"]}>
          09
        </a>
      </nav>
    </header>
  );
};
