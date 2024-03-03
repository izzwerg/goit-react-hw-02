import styles from "./Options.module.css";

function Options({updateFeedback}) {
  return (
    <div className={styles.wrapper}>
        <button type="button" onClick={() => {
              updateFeedback("good");
            }}>Good</button>
        <button type="button" onClick={() => {
              updateFeedback("neutral");
            }}>Neutral</button>
        <button type="button" onClick={() => {
              updateFeedback("bad");
            }}>Bad</button>
    </div>
  );
}

export default Options;