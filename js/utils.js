const mainElement = document.querySelector(`.main`);

const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const getFragmentFromString = (str) => new DOMParser().parseFromString(str, `text/html`).body.firstChild;

const drawScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export {render, getFragmentFromString, drawScreen, getRandomInt};
