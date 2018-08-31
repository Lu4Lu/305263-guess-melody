
const gameHeader = {
  logoBack: `Сыграть ещё раз`,
  time: new Set([`min`, `dots`, `secs`]),
  notes: new Set([`correct`, `wrong`, `wrong`])
};

// header template
const getHeader = (time) =>`
    <header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">${gameHeader.logoBack}</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370"
                style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">      
        <span class="timer__mins">${time}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">00</span>
      </div>

      <div class="game__mistakes">   
      ${[...gameHeader.notes].map((note) => `<div class="${note}"></div>`).join(``)}</div>
    </header>
`;

export default getHeader;