// import React, { useState } from "react";
// import InputHandler from "../wordCloud/InputHandler";
// import FinalPage from "../quizzes/FinalPage";
// //import {QuestionsPage} from "../quizzes/QuestionPage";
// import StartingPage from "../quizzes/StartingPage";
// import WritingHandler from "../writingAssessment/WritingHandler";
// import  "../general/NewCard.css";

// export default function Learning() {
//   const [score, setScore] = useState(0);
//   const [topScore, setTopScore] = useState(0);
//   const [showStartingPage, setShowStartingPage] = useState(true);
//   const [showQuestionsPage, setShowQuestionsPage] = useState(false);
//   const [showFinalPage, setShowFinalPage] = useState(false);
//   const [showQuizPage, setQuizPage] = useState(false);
//   const [showWordPage, setWordPage] = useState(false);


//   const StartQuiz = () => {
//     setQuizPage(!showQuizPage);
//     console.log(showQuizPage);
//   }

//   const StartWord = () => {
//     setWordPage(!showWordPage);
//     console.log(!showWordPage);
//   }


//   return (
//     <div>

//         <div className="newCard" onClick={StartQuiz}>
//           <div className="content">
//             <div className="front">
//               <h3 className="title">Hello</h3>
//               <p className="subtitle">Hover me :)</p>
//             </div>

//             <div className="back">
//               <p className="description">
//                 Cool description so you can read it too my friend
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="newCard1" onClick={StartWord}>
//           <div className="content">
//             <div className="front">
//               <h3 className="title">Hey</h3>
//               <p className="subtitle">Hover me :)</p>
//             </div>

//             <div className="back">
//               <p className="description">
//                 Cool description so you can read it too my friend
//               </p>
//             </div>
//           </div>
//         </div>
// {/* 
//         <>
//         {SHowHandler}
//         </> */}
//         {/* <WritingHandler/> */}
//         {showWordPage && (<InputHandler/>)}
//         {showWordPage && (<WritingHandler/>)}


//       {showStartingPage && showQuizPage && (
//         <StartingPage
//           setShowStartingPage={setShowStartingPage}
//           setShowQuestionsPage={setShowQuestionsPage}
//           topScore={topScore}
//         />
//       )}

//       {showQuestionsPage && showQuizPage && (
//         <QuestionsPage
//           score={score}
//           setScore={setScore}
//           setShowQuestionsPage={setShowQuestionsPage}
//           setShowFinalPage={setShowFinalPage}
//         />
//       )}

//       {showFinalPage && showQuizPage && (
//         <FinalPage
//           score={score}
//           topScore={topScore}
//           setTopScore={setTopScore}
//           setShowStartingPage={setShowStartingPage}
//           setShowFinalPage={setShowFinalPage}
//           setScore={setScore}
//         />
//       )}


      

//     </div>
//   );
// }
