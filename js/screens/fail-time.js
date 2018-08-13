import {changeScreen, render} from '../utils.js';

import welcome from './welcome.js';

const template = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>
  `;

const element = render(template);

const replayElement = element.querySelector(`.result__replay`);
replayElement.addEventListener(`click`, () => changeScreen(welcome));

export default element;
