import {assert} from 'chai';
import {showResults} from './showResults';

const getGameResult = (playerPoints, playerNotes, playerTime) => ({
  points: playerPoints,
  notes: playerNotes,
  time: playerTime
});

const statistics = [4, 5, 8, 11];

describe(`Show results`, () => {
  it(`should return _Время вышло! Вы не успели отгадать все мелодии._`, () => {
    assert.equal(showResults(statistics, getGameResult(10, 2, 0)), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return _У вас закончились все попытки. Ничего, повезёт в следующий раз!_`, () => {
    assert.equal(showResults(statistics, getGameResult(10, 4, 100)), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return _Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков._`, () => {
    assert.equal(showResults(statistics, getGameResult(20, 3, 299)), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков.`);
  });

  it(`should return _Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков._`, () => {
    assert.equal(showResults(statistics, getGameResult(7, 2, 299)), `Вы заняли 3 место из 5 игроков. Это лучше, чем у 40% игроков.`);
  });

  it(`should return _Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков._`, () => {
    assert.equal(showResults(statistics, getGameResult(2, 0, 299)), `Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков.`);
  });
});
