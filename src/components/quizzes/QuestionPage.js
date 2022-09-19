import React, { useState } from "react";
import {SlangQuestion, EnglishQuestion} from "./Question";

export const SlangQuestionPage = ({
    questions,
    score,
    setScore,
    setShowQuestionsPage,
    setShowFinalPage,
    handleRecord
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <SlangQuestion
         questionIndex={questionIndex}
         questions={questions}
         setQuestionIndex={setQuestionIndex}
         setShowQuestionsPage={setShowQuestionsPage}
         setShowFinalPage={setShowFinalPage}
         score={score}
         setScore={setScore}
         handleRecord = {handleRecord}
      />
    </>
  );
};

export const EnglishQuestionPage = ({
  questions,
  score,
  setScore,
  setShowQuestionsPage,
  setShowFinalPage,
  handleRecord,
  answers
}) => {
const [questionIndex, setQuestionIndex] = useState(0);

return (
  <>
    <EnglishQuestion
       questionIndex={questionIndex}
       questions={questions}
       answers = {answers}
       setQuestionIndex={setQuestionIndex}
       setShowQuestionsPage={setShowQuestionsPage}
       setShowFinalPage={setShowFinalPage}
       score={score}
       setScore={setScore}
       handleRecord = {handleRecord}
    />
  </>
);
};
