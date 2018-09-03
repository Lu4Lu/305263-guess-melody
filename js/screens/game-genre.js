import {render} from "../utils";
import getHeader from "../header";

// import {changeScreen} from "./change-screen";

// import {levelArtist} from "./game-artist";


export const levelGenre = (state) => {

  const levelIndex = state.level;
  console.log(`level index: `, levelIndex);

  console.log(`левел жанр`);
  const gameLevel = state.questions[levelIndex];
  console.log(`game level: `, gameLevel);

  const levelTracks = [...Object.entries(gameLevel.tracks)];
  console.log(`levelTracks: `, levelTracks);

  const tracks = levelTracks.map(([key, track]) => `
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
    ${getHeader(state)}
    <section class="game__screen">
      <h2 class="game__title">${gameLevel.questionTitle}</h2>
      <form class="game__tracks"> 
        ${tracks}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
  `;

  const element = render(template);

  // const gameSubmitElement = element.querySelector(`.game__submit`);
  // gameSubmitElement.disabled = true;

  // gameSubmitElement.addEventListener(`click`, () => {
  //   changeScreen();
  // });

  //
  // const answerElements = Array.from(element.querySelectorAll(`input`));
  //
  // const showArtist = () => {
  //   drawScreen(levelArtist);
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

