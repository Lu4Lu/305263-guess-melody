import FailTimeScreen from '../views/failtime-view';
// import WelcomeView from "../views/welcome-view";
// import {drawScreen} from "../utils";
// import {initialState} from "../data/play-data";

export default (state) => {
  const screen = new FailTimeScreen(state);

  // screen.playButtonClickHandler = () => {
  //   drawScreen(initialState);
  // };

  return screen.element;
};
``
