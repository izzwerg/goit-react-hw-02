import styles from "./Feedback.module.css";

function Feedback({feedback, totalFeedback, notBadFeedback}) {
    const positive = Math.round((notBadFeedback / totalFeedback) * 100)
  return (
    <div className={styles.wrapper}>
      <ul className={styles.feedbackList}>
        <li><p>Good: {feedback.good}</p></li>
        <li><p>Neutral: {feedback.neutral}</p></li>
        <li><p>Bad: {feedback.bad}</p></li>
        <li><p>Total: {totalFeedback}</p></li>
        <li><p>Positive: {positive}%</p></li>
      </ul>
    </div>
  );
}

export default Feedback;
