import {drawScreen} from "./utils";
// import welcomeScreen from './screens/welcome-screen';
import genreScreen from './screens/genre-screen';
import {initialState} from "./data/play-data";

drawScreen(genreScreen(initialState));
