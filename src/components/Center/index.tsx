import styles from "./styles.module.css";
export const Center: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles["center-wrapper"]}>
      <div className={styles["center-inner"]}>{children}</div>
    </div>
  );
};
