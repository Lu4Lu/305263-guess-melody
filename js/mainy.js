'use strict';
const ARROW = {
  right: 37,
  left: 39
};

const mainElement = document.querySelector(`.main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
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

const arrowsWrapElement = document.createElement(`div`);
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

const arrowButtonElements = arrowsWrapElement.querySelectorAll(`.arrows__btn`);
arrowButtonElements[0].classList.add(`backward`);
arrowButtonElements[1].classList.add(`forward`);


arrowButtonElements[0].addEventListener(`mouseClick`, (evt) => {
  evt.preventDefault();
  select(current - 1);
});

// // const mainElement = document.querySelector(`#main`);
//
// const templateElements = document.querySelectorAll(`template`);
//

//
// // Создайте функцию, которая по переданному номеру будет показывать
// // экран из массива, созданного в прошлом задании
//
// // where to write in
// const sectionElement = document.querySelector(`.main`);
//
// //
// const cardElement = similarCardTemplate.cloneNode(true);
//
// const div = sectionElement.createElement('div');
// div.setAttribute('class', 'app');
// div.innerHTML = 'HERE TOO MUCH HTML that is much more than one line of code';
//
// // take the element from array
//
// // const content = templateElements[1].querySelector(`section`);
//
// // const content =
// // write it to the section.main block
// sectionElement.fillContent = content;
