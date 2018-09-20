import GenreView from "../views/genre-view";

export default (state) => {

  const levelIndex = state.level;
  // console.log(`level index: `, levelIndex);

  const gameLevel = state.questions[levelIndex];
  // console.log(`game level: `, gameLevel);

  const screen = new GenreView(gameLevel);

  // eventListners for elements in bind()
  // описать answerButtonClickHandler() внутри genreScreen

  // принимает параметр isCorrect
  // генерирует answer -
  // меняет state
  // делает changeScreen c новым state

  const answerButtonClickHandler = (isCorrect) => {

    const answer = {correct: isCorrect, time: 30};

    let newState;

    if (isCorrect === false) {
      newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
    } else {
      newState = Object.assign({}, state, {level: state.level + 1});
    }
    newState.answers.push(answer);
    console.log(`newState: `, newState);

    console.log(`change screen _________________________`);

    // changeScreen(newState);
  };

  screen.answerButtonClickHandler = answerButtonClickHandler;

  return screen.element;
};


