import {assert} from 'chai';
import {calculatePoints, getAnswers} from './points';

describe(`Calculate points`, () => {
  it(`should return -1 when answers < 10`, () => {
    assert.equal(calculatePoints(getAnswers(true, 30, 3), 0), -1);
  });

  it(`Notes amount should be >= 0`, () => {
    assert.throws(() => calculatePoints(getAnswers(undefined, 30, 10), -3));
  });

  it(`should return 20 (points) if all answers are correct, and speed always <30 sec`, () => {
    assert.equal(calculatePoints(getAnswers(true, 25, 10), 0), 20);
  });

  it(`should return 10 (points) if all answers are correct, but speed always >30 sec`, () => {
    assert.equal(calculatePoints(getAnswers(true, 35, 10), 0), 10);
  });
});
