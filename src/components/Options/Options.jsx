import styles from "./Options.module.css";

function Options() {
  return (
    <div className={styles.wrapper}>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
    </div>
  );
}

export default Options;