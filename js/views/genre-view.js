import AbstractView from '../views/abstract-view';
// import string from '../data/screen-strings';
import {playerGenre} from "../screens/player";
import getHeader from "../header";

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    console.log(`genreView constructor`);
    this.level = level;
    console.log(`this.level: `, this.level);

    this.levelTracks = [...Object.entries(this.level.tracks)];
    console.log(`this.levelTracks: `, this.levelTracks);

    this.questionTitle = this.level.questionTitle;
    console.log(`this.questionTitle: `, this.questionTitle);
  }

  get template() {
    return `
    <section class="game game--genre">
    ${getHeader({})}
    <section class="game__screen">
      <h2 class="game__title">${this.questionTitle}</h2>
      <form class="game__tracks">
        ${this.levelTracks.map(([key, track]) => {
    return `${playerGenre(track.audio)}
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="${key}">
            <label class="game__check" for="${key}">Отметить</label>
          </div>
        </div>`;
  }).join(``)}
      <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>
  `;
  }

  answerButtonClickHandler() {}

  // bind — метод, который будет добавлять обработчики событий.
  // Метод по умолчанию ничего не делает. Если нужно обработать какое-то событие,
  // то этот метод должен быть переопределён в наследнике с необходимой логикой
  bind(element) {
    // console.log(`element:`, element);

    const isCorrectCheck = (array, genre)=>{

      return array.every((item) => {
        if (item.checked) {
          return item.value === genre;
        } else {
          return item.value !== genre;
        }
      });
    };

    const gameSubmitElement = element.querySelector(`.game__submit`);

    const form = element.querySelector(`.game__tracks`);

    gameSubmitElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      console.log(`this.level:`, this.level);

      const correctGenre = this.level.genre;
      const currentAnswers = Array.from(form.querySelectorAll(`input`));

      let isCorrect = isCorrectCheck(currentAnswers, correctGenre);
      console.log(`isCorrect:`, isCorrect);

      this.answerButtonClickHandler(isCorrect);
    });

  }
}
