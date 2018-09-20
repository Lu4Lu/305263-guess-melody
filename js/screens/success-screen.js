import SuccessView from '../views/success-view';

export default (state) => {

  const screen = new SuccessView(state);

  return screen.element;
};


// export default element;
