import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Items: {completedTodos}</span>
      <span className={styles.item}>Total Items: {totalTodos}</span>
    </div>
  );
}
