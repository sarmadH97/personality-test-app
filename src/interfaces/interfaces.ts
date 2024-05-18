export interface Question{
    question: string;
    answers:string[];
    correct: string
    questionId: string;

}

export interface questionProps {
    question: Question;
    getAnswers: (val: string) => void;
  }
  