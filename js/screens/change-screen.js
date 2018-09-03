/* eslint-disable */

import {showScreen} from '../render';
import {QuestionType, MAX_QUESTIONS} from '../data';
// import genreScreen from './genre_screen';
// import artistScreen from './artist_screen';
// import fallScreen from './fail_screen';
// import timeFailScreen from './timefail_screen';
// import winScreen from './win_screen';

// import {drawScreen} from './utils';
// import {questionsMockData} from "./data";
// import {welcomeScreenElement, playButtonElement} from './screens/welcome';
// // import {gameGenreScreenElement, gameBackElement as genreGameBack} from './screens/game-genre';
// // import {gameBackElement as artistGameBack} from './screens/game-artist';
// import {replayElement as successReplayButton} from './screens/result-success';
// import {replayElement as failTimeReplayButton} from './screens/fail-time';
// import {replayElement as failTriesReplayButton} from './screens/fail-tries';


export const changeScreen = (state) => {
  const questions = state.questions[state.level];
};


// export const drawScreen = (state) => {
//   const questions = state.questions[state.level];
//   if (state.lives < 0) {
//     showScreen(fallScreen(state));
//   } else if (state.time < 0) {
//     showScreen(timeFailScreen(state));
//   } else if (state.level === MAX_QUESTIONS) {
//     showScreen(winScreen(state));
//   } else if (questions.type === QuestionType.ARTIST) {
//     showScreen(artistScreen(state));
//   } else if (questions.type === QuestionType.GENRE) {
//     showScreen(genreScreen(state));
//   }
// };
