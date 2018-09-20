import FailTimeScreen from '../views/failtime-view';
import {drawScreen} from "../utils";
import {initialState} from "../data/play-data";
import welcomeScreen from '../screens/welcome-screen';

export default (state) => {
  const screen = new FailTimeScreen(state);

  screen.playButtonClickHandler = () => {
    drawScreen(welcomeScreen(initialState));
  };

  return screen.element;
};
