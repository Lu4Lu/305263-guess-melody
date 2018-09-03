import {changeScreen} from './utils';
import {questionsMockData} from "./data";
import {welcomeScreenElement, playButtonElement} from './screens/welcome';
// import {gameGenreScreenElement, gameBackElement as genreGameBack} from './screens/game-genre';
// import {gameBackElement as artistGameBack} from './screens/game-artist';
import {replayElement as successReplayButton} from './screens/result-success';
import {replayElement as failTimeReplayButton} from './screens/fail-time';
import {replayElement as failTriesReplayButton} from './screens/fail-tries';

// import {levelGenre} from "./screens/game-genre";
import {levelArtist} from "./screens/game-artist";

changeScreen(welcomeScreenElement);

const initialState = {
  time: 5,
  level: 2,
  notes: 3,
  questions: questionsMockData,
  answers: []
};

// levelGenre(initialState)


// playButtonElement.addEventListener(`click`, () => changeScreen(gameGenreScreenElement));
// playButtonElement.addEventListener(`click`, () => changeScreen(levelGenre(initialState)));
playButtonElement.addEventListener(`click`, () => changeScreen(levelArtist(initialState)));
// genreGameBack.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
// artistGameBack.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
successReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
failTimeReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
failTriesReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
