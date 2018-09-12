import AbstractView from '../views/abstract-view';
// import string from '../data/screen-strings';
import {playerGenre} from "../screens/player";

export default class GenreView extends AbstractView {
  constructor(questions) {
    super();
    this.questions = questions;
    console.log(`questions: `, questions);
    this.levelTracks = [...Object.entries(this.questions.tracks)];
    console.log(`this.levelTracks: `, this.levelTracks);
  }

  get template() {
    return `
    <section class="game game--genre">
    <section class="game__screen">
      <h2 class="game__title">${this.questions.questionTitle}</h2>
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
    console.log(`element:`, element);
  }
}
