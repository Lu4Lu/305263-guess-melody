import {assert} from 'chai';
import {calculatePoints} from './points';

// Массив ответов должен хранить в себе данные об ответах
// пользователя на каждый вопрос по порядку —
// информацию об успешном или неуспешном ответе и времени,
// затраченном на ответ.

// answers correct, less than 10
const MOCK_ANSWERS = [{correct: true, time: 30}];

// answers correct, not quick
const MOCK_ANSWERS2 = [
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 32},
  {correct: true, time: 31}
];

// answers correct, quick
const MOCK_ANSWERS3 = [
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29},
  {correct: true, time: 29}
];

// not quick, 3 mistakes
const MOCK_ANSWERS4 = [
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: true, time: 31},
  {correct: false, time: 31},
  {correct: false, time: 31},
  {correct: false, time: 31},
];


describe(`Calculate points`, () => {
  it(`should return -1 when answers < 10`, () => {
    assert.equal(calculatePoints(MOCK_ANSWERS, 0), -1);
  });

  it(`should return 10 if all questions answered not quick and correct, no mistakes`, () => {
    assert.equal(calculatePoints(MOCK_ANSWERS2, 3), 10);
  });

  it(`should return 20 when all answers are quick and correct, no mistakes`, () => {
    assert.equal(calculatePoints(MOCK_ANSWERS3, 3), 20);
  });

  it(`should not allow set negative values to notes`, () => {
    assert.throws(() => calculatePoints(MOCK_ANSWERS2, -3), `Notes amount should not be negative.`);
    // assert.throws(calculatePoints(answers, -1), -1, `should not allow set negative values to notes`);
  });

  it(`minimal possible points - should return 2 when when is no quick, have 3 mistakes`, () => {
    assert.equal(calculatePoints(MOCK_ANSWERS4, 0), 2);
  });

});
