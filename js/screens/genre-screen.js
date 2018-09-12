import {drawScreen} from "../utils";
import GenreView from "../views/genre-view";
import {initialState} from "../data/play-data";

export const isCorrectCheck = (array, genre)=>{
  // debugger;
  return array.every((item) => {
    if (item.checked) {
      return item.value === genre;
    } else {
      return item.value !== genre;
    }
  });
};

export default (state) => {

  // const questions = state.questions[0];

  const screen = new GenreView(state);

  console.log(`state: `, state);

  // screen.addEventListener(`click`, (evt) => {
  //   evt.preventDefault();
  //
  //   // console.log(`gameLevel:`, gameLevel);
  //
  //   let newState;
  //   const correctGenre = level.genre;
  //   const currentAnswers = Array.from(form.querySelectorAll(`input`));
  //
  //   let isCorrect = isCorrectCheck(currentAnswers, correctGenre);
  //   // console.log(`isCorrect:`, isCorrect);
  //
  //   const answer = {correct: isCorrect, time: 30};
  //
  //   if (isCorrect === false) {
  //     newState = Object.assign({}, state, {level: state.level + 1, notes: state.notes - 1});
  //   } else {
  //     newState = Object.assign({}, state, {level: state.level + 1});
  //   }
  //   newState.answers.push(answer);
  //
  //   changeScreen(newState);
  // });

  return screen.element;
};
