import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TestQuestions from "../TestQuestions";
import {questionsList} from "../../../utils/questionsList";
const { expect, describe, test } = require('@jest/globals');

describe("TestQuestions test cases", () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <TestQuestions />
      </BrowserRouter>
    );
  });
  test("should render component", () => {
    let startquizbutton=screen.getByRole('button');

    fireEvent.click(startquizbutton);

    expect(screen.getByText(questionsList[0].question)).toBeInTheDocument()

  });

});
