import string from '../data/screen-strings';
import AbstractView from '../views/abstract-view';

export default class FailTimeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
        <h2 class="result__title">Увы и ах!</h2>
        <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
        <button class="result__replay" type="button">Попробовать ещё раз</button>
      </section>
    `;
  }

  playButtonClickHandler() {}

  bind(element) {
    console.log(`element:`, element);
    // const playButton = element.querySelector(`.welcome__button`);
    //
    // playButton.addEventListener(`click`, () => {
    //   this.playButtonClickHandler();
    // });
  }
}
