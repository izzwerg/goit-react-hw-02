import styles from "./Feedback.module.css";

function Feedback(feedback) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.feedbackList}>
        <li><p>Good: {feedback.feedback.good}</p></li>
        <li><p>Neutral: {feedback.feedback.neutral}</p></li>
        <li><p>Bad: {feedback.feedback.bad}</p></li>
      </ul>
    </div>
  );
}

export default Feedback;
