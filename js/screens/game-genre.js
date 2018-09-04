import {render} from "../utils";
import getHeader from "../header";
import {changeScreen} from "./change-screen";

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

  const gameSubmitElement = element.querySelector(`.game__submit`);
  // gameSubmitElement.disabled = true;

  const form = element.querySelector(`.game__tracks`);

  const currentAnswers = Array.from(form.querySelectorAll(`input`));

  console.log(`currentAnswers: `, currentAnswers);


  gameSubmitElement.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    console.log(`gameSubmitElement - click`);

    // multiple


    let newState;
    // const isCorrect = false;

    const checkedAnswers = currentAnswers.filter((item) => item.checked).map((it) => it.id);
    console.log(`checkedAnswers: `, checkedAnswers);

    const rightAnswers = Object.keys(gameLevel.tracks).filter((it)=> gameLevel.tracks[it].isCorrect);
    console.log(`rightAnswers: `, rightAnswers);


    const isCorrect = rightAnswers.every((key) =>
      gameLevel.tracks[key].isCorrect === checkedAnswers.includes(key));

    // const correct = Object.keys(questions.answers).every( (key) =>
    //   questions.answers[key].correct === checkedAnswer.includes(key));

    // const isCorrect = rightAnswers.every((key) =>
    //   rightAnswers[key] === checkedAnswers[key]
    // );

    // forEach()
    console.log(`isCorrect: `, isCorrect);

    // const answer = {correct: isCorrect, time: 20};
    if (isCorrect === false) {
      newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
    } else {
      newState = Object.assign({}, state, {level: state.level + 1});
    }
    newState.answers.push(currentAnswers);
    console.log(`answer: `, currentAnswers)
    changeScreen(newState);
  });

  // const answerElements = Array.from(element.querySelectorAll(`input`));

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

