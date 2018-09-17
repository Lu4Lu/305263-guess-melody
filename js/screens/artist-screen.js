import ArtistView from "../views/artist-view";
// import GenreView from "../views/genre-view";

export default (state) => {

  const levelIndex = state.level;
  // console.log(`level index: `, levelIndex);

  const gameLevel = state.questions[levelIndex];
  console.log(`game level: `, gameLevel);

  const screen = new ArtistView(gameLevel);


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
    // });
    screen.answerButtonClickHandler = answerButtonClickHandler;
  };
  return screen.element;
};


