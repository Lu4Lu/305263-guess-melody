import {drawScreen} from "./utils";
// import welcomeScreen from './screens/welcome-screen';
// import genreScreen from './screens/genre-screen';
// import artistScreen from './screens/artist-screen';
// import failTimeScreen from './screens/failtime-screen';
// import failTriesScreen from './screens/failtries-screen';
import successScreen from './screens/success-screen';
import {initialState} from "./data/play-data";

// drawScreen(genreScreen(initialState));
// drawScreen(artistScreen(initialState));
drawScreen(successScreen(initialState));
