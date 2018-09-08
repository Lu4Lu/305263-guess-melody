import {assert} from 'chai';
import {isCorrectCheck} from "../isCorrectCheck";


const checkedOk = [
  {checked: true, genre: `a`},
  {checked: false, genre: `b`},
  {checked: true, genre: `a`},
  {checked: true, genre: `a`},
];
const checkedAll = [
  {checked: true, genre: `a`},
  {checked: true, genre: `b`},
  {checked: true, genre: `a`},
  {checked: true, genre: `a`},
];

const checkedBad2 = [
  {checked: false, genre: `a`},
  {checked: true, genre: `b`},
  {checked: true, genre: `a`},
  {checked: false, genre: `a`},
];
const checkedBad3 = [
  {checked: false, genre: `a`},
  {checked: true, genre: `b`},
  {checked: true, genre: `a`},
  {checked: true, genre: `a`},
];

describe.only(`Genre checks`, () => {
  it(`should return true`, () => {
    assert.equal(isCorrectCheck(checkedOk, `a`), true);
  });

  it(`should return false checkedAll`, () => {
    assert.equal(isCorrectCheck(checkedAll, `a`), false);
  });

  it(`should return false checkedBad2`, () => {
    assert.equal(isCorrectCheck(checkedBad2, `a`), false);
  });

  it(`should return false checkedBad3`, () => {
    assert.equal(isCorrectCheck(checkedBad3, `a`), false);
  });

});
