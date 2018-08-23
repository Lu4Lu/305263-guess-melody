import {assert} from 'chai';
import {showResults} from './showResults';

const getGameResult = (playerPoints, playerNotes, playerTime) => ({
  points: playerPoints,
  notes: playerNotes,
  time: playerTime
});

const statistics = [4, 5, 8, 10, 11];

describe(`Show results`, () => {
  it(`should return _Время вышло! Вы не успели отгадать все мелодии._`, () => {
    assert.equal(showResults(statistics, getGameResult(10, 2, 0)), `Время вышло! Вы не успели отгадать все мелодии`);
  });

});
