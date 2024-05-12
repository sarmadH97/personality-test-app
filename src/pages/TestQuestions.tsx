import { useState } from "react";
import Background from "../components/Background/Background";
import Navbar from "../components/Navbar/Navbar";
import QuestionsComponent from "../components/QuestionsComponent/Questions";
import questionsList from "../questionJson/questionsList";
import svg from "../assets/undraw_content_team_re_6rlg.svg";
import { motion } from "framer-motion";

const TestQuestions = () => {
  let ansScore = 0;
  let currIndex = 0;
  const allQuestions = questionsList;
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[13]);
  const [showResult, setShowResult] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  function getAnswers(ans: string) {
    currIndex = allQuestions.indexOf(currentQuestion);
    setCurrentQuestion(allQuestions[currIndex + 1]);
    if (currentQuestion.correct === ans) {
      ansScore += 1;
    }
    if (currIndex === allQuestions.length - 1) {
      setShowResult(true);
    }
  }

  function returnColoredText(text: string) {
    return (
      <p className="font-bold bg-gradient-to-r from-blue-500 to-cyan-500 inline-block text-transparent bg-clip-text ">
        {text}
      </p>
    );
  }
  return (
    <div className="w-screen h-screen bg-white">
      <Background />
      <div className="absolute inset-0">
        <>
          <Navbar />
        </>
        <div className="px-16 mt-36 h-80 w-full">
          {!showQuestions ? (
            <>
              <h1 className="text-center font-sans text-6xl font-semibold tracking-wider">
                Uncover Your Social Style: {returnColoredText("Introvert")} or{" "}
                {returnColoredText("Extrovert")}?
              </h1>
              <div className="flex justify-center mt-4">
                <img src={svg} height={500} width={500} alt="Your SVG" />
              </div>
              <div className="flex justify-center mt-12">
                <motion.button
                  className="p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
                  onClick={() => {
                    setShowQuestions(true);
                  }}
                  whileHover={{
                    scale: 1.5  ,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Start the Quiz
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <div className="m-24">
                <QuestionsComponent
                  question={currentQuestion}
                  getAnswers={getAnswers}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestQuestions;
