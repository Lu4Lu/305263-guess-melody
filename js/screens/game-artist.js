import {drawScreen, render, getRandomInt} from "../utils";
import {questionsMockData, initialState} from "../data";

import resultSuccess from "./result-success";
import failTime from "./fail-time";
import failTries from "./fail-tries";

import getHeader from "../header";

export const levelArtist = (state) => {

  const artists = [...Object.entries(state.questions[state.level - 1].answers)].map(([key, artist]) => `
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="${artist.isCorrect}" id="${key}">
      <label class="artist__name" for="${key}">
        <img class="artist__picture" src="${artist.avatar}" alt="${artist.name}">${artist.name}
      </label>
    </div>`).join(``);

  // game artist screen
  const template = `
  <section class="game game--artist">
    ${getHeader(`${initialState}`)}
  
    <section class="game__screen">
      <h2 class="game__title">${questionsMockData[1].questionTitle}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${questionsMockData[1].audio}"></audio>
      </div>

      <form class="game__artist">
      ${artists}
      </form>
    </section>
  </section>
  `;

  const element = render(template);

  Array.from(element.querySelectorAll(`.artist__name`)).forEach((name) => {
    name.addEventListener(`click`, () => {
      let ifWin = getRandomInt(3);

      if (ifWin < 1) {
        drawScreen(resultSuccess);
      } else if (ifWin > 2) {
        drawScreen(failTime);
      } else {
        drawScreen(failTries);
      }
    });
  });

  return element;
};

//
// export const gameBackElement = element.querySelector(`.game__back`);
//
// export default element;
