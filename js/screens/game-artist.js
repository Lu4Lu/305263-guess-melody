import {render} from "../utils";
import {questionsMockData, initialState} from "../data";

// import resultSuccess from "./result-success";
// import failTime from "./fail-time";
// import failTries from "./fail-tries";

import getHeader from "../header";
import {changeScreen} from "./change-screen";

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
    ${getHeader(initialState)}

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

  const artistBtnElement = Array.from(element.querySelectorAll(`.artist__name`));

  // artistBtnElement.forEach((name) => {
  //   name.addEventListener(`click`, () => {
  //     let newState;
  //     if (name) {
  //       newState = Object.assign({}, state, {level: state.level + 1});
  //     } else {
  //       newState = Object.assign({}, state, {level: state.level + 1});
  //     }
  //     changeScreen(newState);
  //   });
  // });

  const answerElements = Array.from(element.querySelector(`.game__artist`).querySelectorAll(`.artist__input`));

  const form = element.querySelector(`.game__artist`);

  // const onAnswerButtonClick = (evt) => {
  //   evt.preventDefault();
  //   let newLives;
  //   const answerNode = form.elements[`answer`];
  //
  //   if (answerNode && questions.answers[answerNode.value].correct) {
  //     newLives = state.lives;
  //     state.answersArr.push({correct: true, time: 12});
  //   } else {
  //     newLives = state.lives - 1;
  //     state.answersArr.push({correct: false, time: 12});
  //   }
  //
  //   const newGameState = Object.assign({}, state, {lives: newLives, level: state.level + 1, answersArr: state.answersArr});
  //   changeScreen(newGameState);
  // };
  //
  // answerButton.forEach((item) => {
  //   item.addEventListener(`click`, answerButtonClickHandler);
  // });

  return element;
};

//
// export const gameBackElement = element.querySelector(`.game__back`);
//
// export default element;
