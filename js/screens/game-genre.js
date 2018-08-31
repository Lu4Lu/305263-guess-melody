import {changeScreen, render} from "../utils.js";
import {questionsMockData} from "../data";

import gameArtist from "./game-artist.js";

export const gameHeader = {
  logoBack: `Сыграть ещё раз`,
  time: new Set([`min`, `dots`, `secs`]),
  notes: new Set([`correct`, `wrong`, `wrong`])
};

export const gameGenreContent = {
  question: questionsMockData[0].questionTitle,
  // 4 different tracks
  track: {
    button: `every time the button`,
    audioSrc: new Audio(questionsMockData[0].tracks.answer1),
    note: `every time a note`,
  }
};

// <audio>
// id="t-rex-roar"
// src="http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3">
// </ audio>

// game genre screen
const template = `
  <section class="game game--genre">
    //header
    <section class="game__screen">
      <h2 class="game__title">${questionsMockData[0].questionTitle}</h2>
      <form class="game__tracks">
      
        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${questionsMockData[0].tracks.answer1}"> </audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${questionsMockData[0].tracks.answer2}"}></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
            <label class="game__check" for="answer-2">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--pause" type="button"></button>
          <div class="track__status">
            <audio src="${questionsMockData[0].tracks.answer3}"}></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
            <label class="game__check" for="answer-3">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${questionsMockData[0].tracks.answer4}"}></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
            <label class="game__check" for="answer-4">Отметить</label>
          </div>
        </div>

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
  `;

const element = render(template);
export const gameGenreScreenElement = element;

const gameSubmitElement = element.querySelector(`.game__submit`);
gameSubmitElement.disabled = true;

gameSubmitElement.addEventListener(`click`, () => {
  changeScreen(gameArtist);
});

const answerElements = Array.from(element.querySelectorAll(`input`));

const showArtist = () => {
  changeScreen(gameArtist);
  answerElements.forEach((item) => {
    item.checked = false;
  });
};

answerElements.forEach((item) => {
  item.addEventListener(`change`, () => {
    if (answerElements.some((answer) => answer.checked)) {
      gameSubmitElement.disabled = false;
    } else {
      gameSubmitElement.disabled = true;
    }
  });
});

gameSubmitElement.addEventListener(`click`, showArtist);

export const gameBackElement = element.querySelector(`.game__back`);

export default element;

