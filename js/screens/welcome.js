import {render} from '../utils.js';

export const welcomeContent = {
  logo: `not active!`,
  button: `not active!`,
  content: {
    title: `Правила игры!`,
    text: `Правила просты:`,
    rules: new Set([`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`])
  },
  creationDate: `2016 — 2017`
};

// welcome screen
const template = `
  <section class="welcome">
    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За 5 минут нужно ответить на все вопросы.</li>
      <li>Можно допустить 3 ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>
  </section>
`;

const element = render(template);
export const welcomeScreenElement = element;

export const playButtonElement = element.querySelector(`.welcome__button`);
