import AbstractView from '../views/abstract-view';
import {playerArtist} from "../screens/player";
import getHeader from "../header";

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    console.log(`artistView constructor_______________________`);
    this.level = level;
    // console.log(`this.level: `, this.level);

    this.levelAnswers = [...Object.entries(this.level.answers)];
    console.log(`this.levelAnswers: `, this.levelAnswers);

    this.questionTitle = this.level.questionTitle;
    console.log(`this.questionTitle: `, this.questionTitle);
  }

  get template() {
    return `
    <section class="game game--artist">
      ${getHeader({})}
      <section class="game__screen">
        <h2 class="game__title">${this.level.questionTitle}</h2>
        ${playerArtist(this.questionTitle.audio)}
        <form class="game__artist">
          ${this.levelAnswers.map(([key, artist]) => {
    return `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="${artist.isCorrect}" id="${key}">
            <label class="artist__name" for="${key}">
            <img class="artist__picture" src="${artist.avatar}" alt="${artist.name}">${artist.name}
            </label>
          </div>`;
  }).join(``)}
        </form>
      </section>
    </section>
  `;
  }

  answerButtonClickHandler() {
  }

  // bind — метод, который будет добавлять обработчики событий.
  // Метод по умолчанию ничего не делает. Если нужно обработать какое-то событие,
  // то этот метод должен быть переопределён в наследнике с необходимой логикой
  bind(element) {
    console.log(`element:`, element);

    const artists = Array.from(element.querySelectorAll(`.artist`));
    console.log(`artists: `, artists);

    // counting the answers and changing current state
    artists.forEach((artist) => {
      artist.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        console.log(`this.level:`, this.level);

        const correctGenre = this.level.genre;
        const currentAnswers = Array.from(form.querySelectorAll(`input`));

        let isCorrect = isCorrectCheck(currentAnswers, correctGenre);
        console.log(`isCorrect:`, isCorrect);

        this.answerButtonClickHandler(isCorrect);
      });

    });
  }
}
