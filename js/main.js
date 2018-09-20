import {drawScreen} from "./utils";
// import welcomeScreen from './screens/welcome-screen';
// import genreScreen from './screens/genre-screen';
// import artistScreen from './screens/artist-screen';
import failTimeScreen from './screens/failtime-screen';
import {initialState} from "./data/play-data";

// drawScreen(genreScreen(initialState));
drawScreen(failTimeScreen(initialState));
