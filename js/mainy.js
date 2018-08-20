import {changeScreen} from './utils.js';
import {welcomeScreenElement, playButtonElement} from './screens/welcome.js';
import {gameGenreScreenElement, gameBackElement as genreGameBack} from './screens/game-genre.js';
import {gameBackElement as artistGameBack} from './screens/game-artist.js';
import {replayElement as successReplayButton} from './screens/result-success.js';
import {replayElement as failTimeReplayButton} from './screens/fail-time.js';
import {replayElement as failTriesReplayButton} from './screens/fail-tries.js';

changeScreen(welcomeScreenElement);

playButtonElement.addEventListener(`click`, () => changeScreen(gameGenreScreenElement));
genreGameBack.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
artistGameBack.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
successReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
failTimeReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
failTriesReplayButton.addEventListener(`click`, () => changeScreen(welcomeScreenElement));
