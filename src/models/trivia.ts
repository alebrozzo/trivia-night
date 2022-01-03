import { shuffle } from "../utils/arrays";

const maxIncorrectOptions = 3;

// internal trivia interface
export interface TriviaAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface Trivia {
  question: string;
  answers: TriviaAnswer[];
}

// external providers trivia interfaces
export interface TriviaWillFry {
  id: number;
  category: string;
  type: "Multiple Choice" | "Boolean";
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

// mappers
export function mapFromTriviaWillFry(trivia: TriviaWillFry): Trivia {
  const answers: TriviaAnswer[] = [{ answer: trivia.correctAnswer, isCorrect: true }];
  // This API returns a different number of incorrect answers per question, so normalize to up to our default.
  const optionsToReturn = Math.min(maxIncorrectOptions, trivia.incorrectAnswers.length);
  for (let ix = 0; ix < optionsToReturn; ix++) {
    const incorrectAnswer = trivia.incorrectAnswers[ix];
    answers.push({
      answer: incorrectAnswer,
      isCorrect: false,
    });
  }

  const internal: Trivia = {
    question: trivia.question,
    answers: shuffle(answers),
  };

  return internal;
}
