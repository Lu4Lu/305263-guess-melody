import {QuestionType, MAX_QUESTIONS} from '../data';
import {drawScreen} from "../utils";
import {levelGenre} from './game-genre';
import {levelArtist} from './game-artist';
import failTries from './fail-tries';
import {getWinScreen} from './result-success';
// import {calculatePoints} from "../data/points";

export const changeScreen = (state) => {
  console.log(`______________________________________________`);
  console.log(`state.notes: `, state.notes);
  console.log(`state.level: `, state.level);
  // console.log(`MAX_QUESTIONS: `, MAX_QUESTIONS);
  console.log(`state.answers: `, state.answers);
  // console.log(`newState: `, newState);

  const questions = state.questions[state.level];
  if (state.notes <= 0) {
    drawScreen(failTries);
  } else if (state.level >= MAX_QUESTIONS) {
    // calculatePoints(state.answers, state.notes);
    drawScreen(getWinScreen(state));
  }
  // else if (state.time < 0) {
  //   drawScreen(failTime);
  // }
  else if (questions.type === QuestionType.ARTIST) {
    drawScreen(levelArtist(state));
  } else if (questions.type === QuestionType.GENRE) {
    drawScreen(levelGenre(state));
  }

};
