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
  // const feedback = useState(baseState);
  // console.log(feedback);
  return (
    <>
      <Description />
      <Options
      baseState={baseState}
      // updateFeedback={updateFeedback}
      // isShowFeedback={isShowFeedback}
      // resetFeedback={resetFeedback}
      />
      <Feedback
      feedback={baseState}
      // totalFeedback={totalFeedback}
      // positiveFeedback={positiveFeedback}
      />
    </>
  );
}

export default App;
