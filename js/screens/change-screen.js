import {QuestionType} from '../data';
import {drawScreen} from "../utils";
import {levelGenre} from './game-genre';
import {levelArtist} from './game-artist';


export const changeScreen = (state) => {
  console.log(`______________________________`);

  console.log(`state: `, state);

  const questions = state.questions[state.level]
  if (questions.type === QuestionType.ARTIST) {
    drawScreen(levelArtist(state));
  } else if (questions.type === QuestionType.GENRE) {
    drawScreen(levelGenre(state));
  }


  // if (state.lives < 0) {
  //   drawScreen(fallScreen(state));
  // } else if (state.time < 0) {
  //   drawScreen()
  // }
};
