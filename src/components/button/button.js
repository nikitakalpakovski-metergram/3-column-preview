import styles from "./button.module.css";

export function Button({ children, style }) {
  return (
    <button style={style} className={styles.buttonBase}>
      {children}
    </button>
  );
}
