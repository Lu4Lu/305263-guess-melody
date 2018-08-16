import {changeScreen} from './utils.js';
import welcome from './screens/welcome.js';
import gameGenre from './screens/game-genre.js';
import element from "./screens/welcome";

changeScreen(welcome);

const playButtonElement = element.querySelector(`.welcome__button`);

playButtonElement.addEventListener(`click`, () => {
  changeScreen(gameGenre);
});
