import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

const baseState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(baseState);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedbackState) => {
      const newFeedback = {
        ...prevFeedbackState,
        [feedbackType]: prevFeedbackState[feedbackType] + 1,
      };
      return newFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const notBadFeedback = feedback.good + feedback.neutral;

  const resetFeedback = () => {
    setFeedback(baseState);
  };

  return (
    <>
      <Description />
      <Options
        baseState={baseState}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          notBadFeedback={notBadFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
