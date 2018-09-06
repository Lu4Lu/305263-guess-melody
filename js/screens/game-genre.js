import {render} from "../utils";
import getHeader from "../header";
import {changeScreen} from "./change-screen";

export const levelGenre = (state) => {

  const levelIndex = state.level;
  // console.log(`level index: `, levelIndex);

  const gameLevel = state.questions[levelIndex];
  // console.log(`game level: `, gameLevel);

  const levelTracks = [...Object.entries(gameLevel.tracks)];
  // console.log(`levelTracks: `, levelTracks);

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

  const gameSubmitElement = element.querySelector(`.game__submit`);
  // gameSubmitElement.disabled = true;

  const form = element.querySelector(`.game__tracks`);

  const currentAnswers = Array.from(form.querySelectorAll(`input`));
  // console.log(`currentAnswers: `, currentAnswers);

  gameSubmitElement.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    let newState;

    const checkedAnswers = currentAnswers.filter((item) => item.checked).map((it) => it.id);
    // console.log(`checkedAnswers: `, checkedAnswers);

    const rightAnswers = Object.keys(gameLevel.tracks).filter((it)=> gameLevel.tracks[it].isCorrect);
    // console.log(`rightAnswers: `, rightAnswers);

    let isCorrect;
    if (rightAnswers.length === checkedAnswers.length) {
      isCorrect = rightAnswers.every((key) => gameLevel.tracks[key].isCorrect === checkedAnswers.includes(key));
      // console.log(`isCorrect: `, isCorrect);
    } else {
      isCorrect = false;
      // console.log(`isCorrect: `, isCorrect);
    }

    const answer = {correct: isCorrect, time: 20};
    // console.log(`answer: `, currentAnswers);

    if (isCorrect === false) {
      newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
    } else {
      newState = Object.assign({}, state, {level: state.level + 1});
    }
    newState.answers.push(currentAnswers);

    changeScreen(newState);
  });

  return element;

};

// export const gameGenreScreenElement = element;
//
// export const gameBackElement = element.querySelector(`.game__back`);
//
// export default element;

