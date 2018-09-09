const QUICK_TIME = 30;
const MAX_QUESTIONS = 10;


// За правильный ответ 1 балл;
// За быстрый правильный ответ (менее 30 секунд) — 2 балла;
// За каждую ошибку вычитается 2 балла.
const Points = {
  DEFAULT_CORRECT: 1,
  QUICK_CORRECT: 2,
  WRONG: -2,
};

// Функция подсчёта набранных баллов игрока:
// на вход принимает массив ответов пользователя;
// на вход принимает кол-во оставшихся нот;
export const calculatePoints = (answers, notes) => {

  let points = 0;

  // console.log(`answers.length`, answers.length);
  // if (answers.length < MAX_QUESTIONS) {
  //   return -1;
  // }

  if (notes < 0) {
    throw new Error(`Notes amount should not be negative.`);
  }

  answers.forEach((answer) => {

    if (answer.correct && answer.time < QUICK_TIME) {
      points += Points.QUICK_CORRECT;
    }

    if (answer.correct && answer.time >= QUICK_TIME) {
      points += Points.DEFAULT_CORRECT;
    }
    if (!answer.correct) {
      points += Points.WRONG;
    }
  });

  console.log(points);
  return points;
};
