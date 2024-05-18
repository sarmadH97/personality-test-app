import { useState } from "react";
import Background from "../../components/Background/Background";
import Navbar from "../../components/Navbar/Navbar";
import QuestionsComponent from "../../components/Questions/Questions";
import {
  extrovertAnswers,
  introvertAnswers,
  questionsList,
} from "../../utils/questionsList";
import svg from "../../assets/undraw_content_team_re_6rlg.svg";
import { motion } from "framer-motion";
import { returnColoredText, returnType } from "../../utils/utils";

const TestQuestions = () => {
  const allQuestions = questionsList;
  const [currIndex, setCurrIndex] = useState(0);
  const [introvertCount, setIntrovertCount] = useState(0);
  const [extrovertCount, setExtrovertCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0]);
  const [showResult, setShowResult] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const getAnswers = (ans: string) => {
    setCurrIndex((prevIndex) => prevIndex + 1);
    setCurrentQuestion(allQuestions[currIndex + 1]);
    if (introvertAnswers.includes(ans)) {
      setIntrovertCount((prevCount) => prevCount + 1);
    } else if (extrovertAnswers.includes(ans)) {
      setExtrovertCount((prevCount) => prevCount + 1);
    }
    if (currIndex === allQuestions.length - 1) {
      setShowResult(true);
    }
  };

  const resultTest = () => {
    setShowQuestions(false);
    setShowResult(false);
    setCurrentQuestion(allQuestions[0]);
    setCurrIndex(0);
    setIntrovertCount(0);
    setExtrovertCount(0);
  };

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
                  className="p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 "
                  onClick={() => {
                    setShowQuestions(true);
                  }}
                  whileHover={{
                    scale: 1.5,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Start the Quiz
                </motion.button>
              </div>
            </>
          ) : (
            <>
              {showResult ? (
                <div>
                  {returnType(introvertCount, extrovertCount)}
                  <div className="flex justify-center">
                    <motion.button
                      className="px-20 py-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 "
                      onClick={resultTest}
                      whileHover={{
                        scale: 1.5,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      Restart the Quiz
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="m-24">
                  <QuestionsComponent
                    question={currentQuestion}
                    getAnswers={getAnswers}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestQuestions;
