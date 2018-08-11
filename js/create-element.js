const element = document.createElement(`div`);
export const getElementFromTemplate = (markup) => {
  element.innerHTML = ``;
  element.innerHTML = markup;
};

// в myDiv будет записан DOM-элемент
// const newElement = getElementFromTemplate(`<div>Разметка DOM-элемента</div>`);
