import {render} from "../utils";
import getHeader from "../header";
import {changeScreen} from "./change-screen";
// import {showResults} from "../data/showResults";
// import {calculatePoints} from "../data/points";

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

  const artistBtnElement = Array.from(element.querySelectorAll(`.artist__input`));

  const currentAnswers = Array.from(element.querySelector(`.game__artist`).querySelectorAll(`.artist__input`));
  // console.log(`currentAnswers: `, currentAnswers);
  // const form = element.querySelector(`.game__artist`);

  // counting the answers and changing current state
  artistBtnElement.forEach((artist) => {
    artist.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      let newState;

      // check which answer is checked
      const checkedAnswer = currentAnswers.filter((item) => item.checked).map((it) => it.id).toString();
      // console.log(`checkedAnswer: `, checkedAnswer);

      const rightAnswer = Object.keys(gameLevel.answers).filter((it)=> gameLevel.answers[it].isCorrect).toString();
      // console.log(`rightAnswer: `, rightAnswer);

      let isCorrect = false;
      if (rightAnswer === checkedAnswer) {
        isCorrect = true;
        // console.log(`isCorrect: `, isCorrect);
      }

      const answer = {correct: isCorrect, time: 10, mistakes: 3 - state.notes};
      // console.log(`answer: `, answer);

      if (isCorrect === false) {
        newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
      } else {
        newState = Object.assign({}, state, {level: state.level + 1});
      }
      state.answers.push(answer);
      console.log(newState.answers);

      changeScreen(newState);
      // showResults(newState.answers, newState);

    });
  });

  return element;
};

