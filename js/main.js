import {drawScreen} from './utils';
import {initialState} from "./data";
import {welcomeScreenElement, playButtonElement} from './screens/welcome-screen';

import {changeScreen} from "./screens/change-screen";

drawScreen(welcomeScreenElement);

playButtonElement.addEventListener(`click`, () => {
  const newState = Object.assign({}, initialState);
  changeScreen(newState);
});


// собрать массив ответов
  // менять кол-во нот и пушить в answers
  // менять ноты в хедере
  // правильно-неправильно ответил в артист
  // ... в жанр

// менять статистику от ответов
 // применить в results

// сделать скрины с результатами и фейлами
  // вывести фейл попыток
  // добавить в него результаты

