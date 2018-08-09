'use strict';

const ARROW = {
  right: 37,
  left: 39
};

const mainElement = document.querySelector(`.main`);
const arrowsWrapElement = document.createElement(`div`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};


function drawArrows() {
  arrowsWrapElement.setAttribute(`class`, `arrows_wrap`);
  arrowsWrapElement.innerHTML = `
    <div class="arrows__wrap">
      <style>
        .arrows__wrap {
          position: absolute;
          top: 135px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button class="arrows__btn"><-</button>
      <button class="arrows__btn">-></button>
    </div>
`;
  mainElement.appendChild(arrowsWrapElement);
  window.arrowButtonElements = arrowsWrapElement.querySelectorAll(`.arrows__btn`);

  window.arrowButtonElements[0].addEventListener(`mousedown`, () => {
    // evt.preventDefault();
    select(current - 1);
  });

  window.arrowButtonElements[1].addEventListener(`mousedown`, () => {
    // evt.preventDefault();
    select(current + 1);
  });
}

const screens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
  drawArrows();
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case ARROW.right:
      select(current + 1);
      break;
    case ARROW.left:
      select(current - 1);
      break;
  }
});

select(0);
