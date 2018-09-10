import {render} from '../utils.js';

export const welcomeContent = {
  button: `Начать игру`,
  content: {
    title: `Правила игры!`,
    text: `Правила просты:`,
    rules: new Set([`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`]),
    lastText: `Удачи!`
  }
};

// welcome screen
const template = `
  <section class="welcome">
    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">${welcomeContent.button}</span></button>
    <h2 class="welcome__rules-title">${welcomeContent.content.title}</h2>
    <p class="welcome__text">${welcomeContent.content.text}</p>
    <ul class="welcome__rules-list">
    ${[...welcomeContent.content.rules].map((rule) => `<li class="rule">${rule}</li>`).join(``)}
    </ul>
    <p class="welcome__text">${welcomeContent.content.lastText}</p>
  </section>
`;

const element = render(template);
export const welcomeScreenElement = element;

export const playButtonElement = element.querySelector(`.welcome__button`);
