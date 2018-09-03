import {drawScreen} from './utils';
import {initialState} from "./data";
import {welcomeScreenElement, playButtonElement} from './screens/welcome';
// import {gameGenreScreenElement, gameBackElement as genreGameBack} from './screens/game-genre';
// import {gameBackElement as artistGameBack} from './screens/game-artist';
import {replayElement as successReplayButton} from './screens/result-success';
import {replayElement as failTimeReplayButton} from './screens/fail-time';
import {replayElement as failTriesReplayButton} from './screens/fail-tries';

import {levelGenre} from "./screens/game-genre";
// import {levelArtist} from "./screens/game-artist";

drawScreen(welcomeScreenElement);

// playButtonElement.addEventListener(`click`, () => drawScreen(gameGenreScreenElement));
playButtonElement.addEventListener(`click`, () => drawScreen(levelGenre(initialState)));
// playButtonElement.addEventListener(`click`, () => drawScreen(levelArtist(initialState)));
// genreGameBack.addEventListener(`click`, () => drawScreen(welcomeScreenElement));
// artistGameBack.addEventListener(`click`, () => drawScreen(welcomeScreenElement));
successReplayButton.addEventListener(`click`, () => drawScreen(welcomeScreenElement));
failTimeReplayButton.addEventListener(`click`, () => drawScreen(welcomeScreenElement));
failTriesReplayButton.addEventListener(`click`, () => drawScreen(welcomeScreenElement));
