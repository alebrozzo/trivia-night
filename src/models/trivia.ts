import { shuffle } from "../utils/arrays";

const maxIncorrectOptions = 3;

// internal trivia interface
export interface ITriviaAnswer {
  answer: string;
  isCorrect: boolean;
}

export interface ITrivia {
  question: string;
  answers: ITriviaAnswer[];
}

// external providers trivia interfaces

export function getTriviaWillFry(categories: string[], count: number) {
  const url = `https://api.trivia.willfry.co.uk/questions?categories=${categories.join(",")}&limit=${count}`;
  return fetch(url).then((res) => res.json());
}

export interface ITriviaWillFry {
  id: number;
  category: string;
  type: "Multiple Choice" | "Boolean";
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

// mappers
export function mapFromTriviaWillFry(trivia: ITriviaWillFry): ITrivia {
  console.log(trivia);

  const answers: ITriviaAnswer[] = [{ answer: trivia.correctAnswer, isCorrect: true }];
  // This API returns a different number of incorrect answers per question, so normalize to up to our default.
  const optionsToReturn = Math.min(maxIncorrectOptions, trivia.incorrectAnswers.length);
  for (let ix = 0; ix < optionsToReturn; ix++) {
    const incorrectAnswer = trivia.incorrectAnswers[ix];
    answers.push({
      answer: incorrectAnswer,
      isCorrect: false,
    });
  }

  const internal: ITrivia = {
    question: trivia.question,
    answers: shuffle(answers),
  };

  return internal;
}
