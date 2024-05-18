import { render, screen, fireEvent } from "@testing-library/react";
import Questions from "../Questions";
import { Question } from "../../../interfaces/interfaces";

const { expect, describe, test } = require("@jest/globals");

const mockQuestion: Question = {
  question: "What is your favorite color?",
  answers: ["Red", "Blue", "Green", "Yellow"],
  correct: "Blue",
  questionId: "13123",
};

const mockGetAnswers = jest.fn();

describe("Questions Component", () => {
  test("renders question text", () => {
    render(<Questions question={mockQuestion} getAnswers={mockGetAnswers} />);
    expect(screen.getByText(mockQuestion.question)).toBeInTheDocument();
  });

  test("renders all answers", () => {
    render(<Questions question={mockQuestion} getAnswers={mockGetAnswers} />);
    mockQuestion.answers.forEach((answer, index) => {
      expect(screen.getByLabelText(answer)).toBeInTheDocument();
      expect(screen.getByTestId(`ans-${index}`)).toBeInTheDocument();
    });
  });

  test("does not call getAnswers if no answer is selected", () => {
    render(<Questions question={mockQuestion} getAnswers={mockGetAnswers} />);

    const submitButton = screen.getByTestId("submitBtn");
    fireEvent.click(submitButton);

    expect(mockGetAnswers).not.toHaveBeenCalled();
  });

  test('calls getAnswers with the selected answer on form submit', () => {
    const { container } = render(<Questions question={mockQuestion} getAnswers={mockGetAnswers} />);

    const answerRadio = screen.getByTestId("ans-1") as HTMLInputElement;
    fireEvent.click(answerRadio);
    expect(answerRadio.checked).toBe(true);

    const form = container.querySelector('form');
    fireEvent.submit(form!);

    expect(mockGetAnswers).toHaveBeenCalledWith('Blue');
  });
});
