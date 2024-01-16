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
          01_sample
        </a>
        <a href="/02_sample" className={styles["nav-item"]}>
          02_sample
        </a>
        <a href="/03_sample" className={styles["nav-item"]}>
          03_sample
        </a>
      </nav>
    </header>
  );
};
