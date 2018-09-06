import {QuestionType, MAX_QUESTIONS} from '../data';
import {drawScreen} from "../utils";
import {levelGenre} from './game-genre';
import {levelArtist} from './game-artist';
import failTries from './fail-tries';
import resultSuccess from './result-success';


export const changeScreen = (state) => {
  console.log(`______________________________________________`);
  console.log(`state.notes: `, state.notes);
  console.log(`state.level: `, state.level);
  console.log(`MAX_QUESTIONS: `, MAX_QUESTIONS);
  // console.log(`state: `, state);

  const questions = state.questions[state.level];
  if (state.notes <= 0) {
    drawScreen(failTries);
  } else if (state.level >= MAX_QUESTIONS) {
    drawScreen(resultSuccess);
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
