
export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainElement = document.querySelector(`.main`);

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

// const ARROW = {
//   right: 37,
//   left: 39
// };
//
// const mainElement = document.querySelector(`.main`);
// // const arrowsWrapElement = document.createElement(`div`);
//
// const selectSlide = (element) => {
//   mainElement.innerHTML = ``;
//   mainElement.appendChild(element.cloneNode(true));
// };
//
// const screens = Array.from(document.querySelectorAll(`template`)).
// map((it) => it.content);
//
// let current = 0;
// const select = (index) => {
//   index = index < 0 ? screens.length - 1 : index;
//   index = index >= screens.length ? 0 : index;
//   current = index;
//   selectSlide(screens[current]);
//   // drawArrows();
// };
//
// document.addEventListener(`keydown`, (evt) => {
//   switch (evt.keyCode) {
//     case ARROW.right:
//       select(current + 1);
//       break;
//     case ARROW.left:
//       select(current - 1);
//       break;
//   }
// });
//
// select(0);
