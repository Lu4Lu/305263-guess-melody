/* eslint-disable */

import {showScreen} from '../render';
import {QuestionType, initialState} from '../data';
import {drawScreen} from "../utils";
import {levelGenre} from './game-genre';
import {levelArtist} from './game-artist';

export const changeScreen = () => {
  const questions = initialState.questions[initialState.level]
  initialState.level = initialState.level + 1;
  if (questions.type === QuestionType.ARTIST) {
    drawScreen(levelArtist(initialState));
  } else if (questions.type === QuestionType.GENRE) {
    drawScreen(levelGenre(initialState));
  }

  // if (state.lives < 0) {
  //   drawScreen(fallScreen(state));
  // } else if (state.time < 0) {
  //   drawScreen()
  // }
};
