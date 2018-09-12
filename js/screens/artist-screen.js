import {render} from "../utils";
import getHeader from "../header";
import {changeScreen} from "./change-screen";

export const levelArtist = (state) => {

  const levelIndex = state.level;
  // console.log(`level index: `, levelIndex);

  // console.log(`левел артист`);
  const gameLevel = state.questions[levelIndex];
  // console.log(`game level: `, gameLevel);

  const levelAnswers = [...Object.entries(gameLevel.answers)];
  // console.log(`levelAnswers: `, levelAnswers);

  const artists = levelAnswers.map(([key, artist]) => `
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="${artist.isCorrect}" id="${key}">
      <label class="artist__name" for="${key}">
        <img class="artist__picture" src="${artist.avatar}" alt="${artist.name}">${artist.name}
      </label>
    </div>`).join(``);

  // game artist screen
  const template = `
  <section class="game game--artist">
    ${getHeader(state)}

    <section class="game__screen">
      <h2 class="game__title">${gameLevel.questionTitle}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${gameLevel.audio}"></audio>
      </div>

      <form class="game__artist">
      ${artists}
      </form>
    </section>
  </section>
  `;

  const element = render(template);

  const artistBtnElement = Array.from(element.querySelectorAll(`.artist`));

  // counting the answers and changing current state
  artistBtnElement.forEach((artist) => {
    artist.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      let newState;

      const isCorrect = artist.querySelector(`input`).value === `true`;

      const answer = {correct: isCorrect, time: 10};

      if (isCorrect === false) {
        newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
      } else {
        newState = Object.assign({}, state, {level: state.level + 1});
      }
      state.answers.push(answer);

      changeScreen(newState);

    });
  });

  return element;
};

