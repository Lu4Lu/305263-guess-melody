import string from '../data/screen-strings';
import AbstractView from '../views/abstract-view';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="welcome">
      <div class="welcome__logo"><img src="img/melody-logo.png" alt="${string.header.logo}" width="186" height="83"></div>
      <button class="welcome__button"><span class="visually-hidden">${string.buttons.play}</span></button>
      <h2 class="welcome__rules-title">${string.welcome.rulesTitle}</h2>
      <p class="welcome__text">${string.welcome.text}</p>
      <ul class="welcome__rules-list">
      ${[...string.welcome.ruleList].map((rule) => `<li class="rule">${rule}</li>`).join(``)}
      </ul>
      <p class="welcome__text">${string.welcome.welcomeText}</p>
    </section>
    `;
  }

  playButtonClickHandler() {}

  bind(element) {
    console.log(`element:`, element);
    const playButton = element.querySelector(`.welcome__button`);

    playButton.addEventListener(`click`, () => {
      this.playButtonClickHandler();
    });
  }
}
