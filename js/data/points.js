const MAX_QUESTIONS = 10;
const FAST_TIME = 30;

const Points = {
  NOT_ALL: -1,
  ANSWERED: 1,
  FAST: 2,
  WRONG: -2
};

export const getAnswers = (dataType, answerTime, count) => {
  const answers = new Array(count).fill({
    correct: dataType,
    time: answerTime
  });
  return answers;
};

export const calculatePoints = (answers, notes) => {

  let points = 0;

  if (answers.length < MAX_QUESTIONS) {
    return Points.NOT_ALL;
  }

  if (notes < 0) {
    throw new Error(`Notes should be >= 0`);
  }

  answers.forEach((answer) => {
    if (answer.correct && answer.time < FAST_TIME) {
      points += Points.FAST;
    }
    if (answer.correct && answer.time >= FAST_TIME) {
      points += Points.ANSWERED;
    }
    if (!answer.correct) {
      points += Points.WRONG;
    }
  });
  return points;
};

