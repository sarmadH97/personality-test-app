import { useState } from "react";
import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import QuestionsComponent from "../components/QuestionsComponent/Questions";
import questionsList from "../questionJson/questionsList"

const TestQuestions = () => {
  const allQuestions=questionsList;
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
  const [prevQuestion, setPrevQuestion] = useState(0)

  function returnQuestion(currQ: number, nextQ: number) {
    
    return allQuestions[0];
  }
  return (
    <div className="w-screen h-screen bg-white">
      <Background />
      <div className="absolute inset-0">
        <>
          <Navbar />
        </>
        <div className="px-16 mt-12 h-80 w-full">
          <h1 className="mb-10">TAKE THE TEST</h1>
          <QuestionsComponent question={currentQuestion}/>
        </div>
      </div>
    </div>
  );
};

export default TestQuestions;
