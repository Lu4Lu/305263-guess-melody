import {drawScreen} from './utils';
import {initialState} from "./data";
import {welcomeScreenElement, playButtonElement} from './screens/welcome';

import {changeScreen} from "./screens/change-screen";

drawScreen(welcomeScreenElement);

playButtonElement.addEventListener(`click`, () => {
  const newState = Object.assign({}, initialState);
  changeScreen(newState);
});
