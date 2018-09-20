import AbstractView from '../views/abstract-view';
import {calculatePoints} from "../data/points";

export default class SuccessView extends AbstractView {
  constructor(level) {
    super();
    console.log(`failtTriesView constructor_______________________`);
    this.level = level;
    console.log(`level: `, level);

    this.points = calculatePoints(level.answers, level.notes);
    console.log(`points: `, this.points);

    this.result = {
      userPoint: this.points,
      time: level.time,
      mistakes: 3 - level.notes
    };
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
        <h2 class="result__title">Вы настоящий меломан!</h2>
        <p class="result__total">За ${this.result.time} минут вы набрали ${this.result.userPoint} очков (8 быстрых), совершив ${this.result.mistakes} ошибки.</p>
        <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
        <button class="result__replay" type="button">Сыграть ещё раз</button>
      </section>
    `;
  }

  playButtonClickHandler() {}

  bind(element) {
    console.log(`element:`, element);
  }
}
