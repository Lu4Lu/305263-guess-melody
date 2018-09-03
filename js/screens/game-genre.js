import {render} from "../utils";
import {questionsMockData} from "../data";

// import gameArtist from "./game-artist";
import getHeader from "../header";

export const levelGenre = (state) => {

  const tracks = [...Object.entries(state.questions[state.level - 1].tracks)].map(([key, track]) => `
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
        <audio src="${track.audio}"></audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.isCorrect}" id="${key}">
        <label class="game__check" for="${key}">Отметить</label>
      </div>
    </div>`).join(``);

  // game genre screen
  const template = `
  <section class="game game--genre">
    ${getHeader(`05`)}
    <section class="game__screen">
      <h2 class="game__title">${questionsMockData[0].questionTitle}</h2>
      <form class="game__tracks"> 
        ${tracks}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
  `;

  const element = render(template);

  const gameSubmitElement = element.querySelector(`.game__submit`);
  gameSubmitElement.disabled = true;

  // gameSubmitElement.addEventListener(`click`, () => {
  //   drawScreen(gameArtist);
  // });

  // const answerElements = Array.from(element.querySelectorAll(`input`));

  // const showArtist = () => {
  //   drawScreen(gameArtist);
  //   answerElements.forEach((item) => {
  //     item.checked = false;
  //   });
  // };
  //
  // answerElements.forEach((item) => {
  //   item.addEventListener(`change`, () => {
  //     if (answerElements.some((answer) => answer.checked)) {
  //       gameSubmitElement.disabled = false;
  //     } else {
  //       gameSubmitElement.disabled = true;
  //     }
  //   });
  // });
  //
  // gameSubmitElement.addEventListener(`click`, showArtist);

  return element;

};

// export const gameGenreScreenElement = element;
//
// export const gameBackElement = element.querySelector(`.game__back`);
//
// export default element;

