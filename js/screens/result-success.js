import {render} from '../utils.js';
import {calculatePoints} from "../data/points";

export const getWinScreen = (state) => {

  const points = calculatePoints(state.answers, state.notes);

  const result = {
    userPoint: points,
    time: state.time,
    mistakes: 3 - state.notes
  };

  // result success screen
  const template = `
    <section class="result">
      <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <h2 class="result__title">Вы настоящий меломан!</h2>
      <p class="result__total">За ${result.time} минут вы набрали ${result.userPoint} очков (8 быстрых), совершив ${result.mistakes} ошибки</p>
      <p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
      <button class="result__replay" type="button">Сыграть ещё раз</button>
    </section>
    `;

  const element = render(template);

  // export const replayElement = element.querySelector(`.result__replay`);

  return element;
};


// export default element;
