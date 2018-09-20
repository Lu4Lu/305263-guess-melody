import FailTriesView from '../views/failtries-view';
import {drawScreen} from "../utils";
import {initialState} from "../data/play-data";
import welcomeScreen from '../screens/welcome-screen';

export default (state) => {
  const screen = new FailTriesView(state);

  screen.playButtonClickHandler = () => {
    drawScreen(welcomeScreen(initialState));
  };

  return screen.element;
};
