const mainElement = document.querySelector(`.main`);

export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
