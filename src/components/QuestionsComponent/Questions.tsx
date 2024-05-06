import { FormEvent } from "react";
import { Question } from "../../interfaces/interfaces";

interface questionProps {
  question: Question;
}

const Questions = ({ question }: questionProps) => {
  const onSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    console.log(form.answer.value);
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit}>
        <div>{question.question}</div>
        <div className="flex flex-col">
          {question?.answers.map((answer, index) => {
            return (
              <label
                key={`${answer}_${index.toString()}`}
                htmlFor={`ans-${index}`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  id={`ans-${index}`}
                  required
                />
                {answer}
              </label>
            );
          })}
        </div>
        <button className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-black" type="submit">Answer</button>
      </form>
    </div>
  );
};

export default Questions;
