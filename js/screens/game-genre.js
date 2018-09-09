import {render} from "../utils";
import getHeader from "../header";
import {changeScreen} from "./change-screen";
// import {showResults} from "../data/showResults";
import {calculatePoints} from "../data/points";

export const isCorrectCheck = (array, genre)=>{
  // debugger;
  return array.every((item) => {
    if (item.checked) {
      return item.value === genre;
    } else {
      return item.value !== genre;
    }
  });
};

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
        <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="${key}">
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

  const form = element.querySelector(`.game__tracks`);

  gameSubmitElement.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    console.log(`gameLevel:`, gameLevel);

    let newState;
    const correctGenre = gameLevel.genre;
    const currentAnswers = Array.from(form.querySelectorAll(`input`));

    let isCorrect = isCorrectCheck(currentAnswers, correctGenre);
    console.log(`isCorrect:`, isCorrect);

    const answer = {correct: isCorrect, time: 30};

    if (isCorrect === false) {
      newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
    } else {
      newState = Object.assign({}, state, {level: state.level + 1});
    }
    newState.answers.push(answer);

    changeScreen(newState);
  });

  return element;

};

// export const gameGenreScreenElement = element;
//
// export const gameBackElement = element.querySelector(`.game__back`);
//
// export default element;

