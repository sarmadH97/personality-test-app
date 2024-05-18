import { FormEvent } from "react";
import { questionProps } from "../../interfaces/interfaces";
import { motion } from "framer-motion";


const Questions = ({ question, getAnswers }: questionProps) => {
  const onSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    console.log(form.answer,'what')
    getAnswers(form.answer.value);
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <form onSubmit={onSubmit} className="">
        <div className="text-center text-5xl font-semibold">
          {question?.question}
        </div>
        <div className="text-left grid grid-cols-2 gap-10 px-10 py-20">
          {question?.answers.map((answer, index) => {
            return (
              <motion.div
                key={`${answer}_${index.toString()}`}
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded border-2 border-slate-400"
              >
                <label htmlFor={`ans-${index}`}>
                  <input
                    data-testId={`ans-${index}`}
                    type="radio"
                    name="answer"
                    value={answer}
                    id={`ans-${index}`}
                    required
                    style={{ marginRight: 10 }}
                  />
                  {answer}
                </label>
              </motion.div>
            );
          })}
        </div>
        {question && (
          <div className="flex justify-center">
            <motion.button
              data-testid="submitBtn"  
              className="px-20 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 text-white"
              type="submit"
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Answer
            </motion.button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Questions;
