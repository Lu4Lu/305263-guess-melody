import {initialState} from '../data/play-data';
import {drawScreen} from "../utils";
import WelcomeView from '../views/welcome-view';

export default (state) => {
  const screen = new WelcomeView(state);

  screen.playButtonClickHandler = () => {
    drawScreen(initialState);
  };

  return screen.element;
};
