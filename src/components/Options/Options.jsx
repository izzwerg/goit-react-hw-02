import styles from "./Options.module.css";

function Options({updateFeedback, totalFeedback, resetFeedback}) {
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
        {totalFeedback > 0 ? <button type="button" onClick={() => {
              resetFeedback();
            }}>Reset</button> : <></>}
    </div>
  );
}

export default Options;