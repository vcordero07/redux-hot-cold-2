import {MAKE_GUESS, RESTART_GAME} from '../actions';

const initialState = {
  guesses: [],
  answer: Math.round(Math.random() * 100),
  feedback: 'Make your guess!'
}

export default (state=initialState, action) => {
  if (action.type === MAKE_GUESS) {
    return {
      ...state,
      guesses: [...state.guesses, action.guess]
     }
  }
  if (action.type === RESTART_GAME) {
    return {
      ...state,
      guesses: [],
      answer: Math.round(Math.random() * 100),
      feedback: 'Make your guess!'
    }
  }

  return state;
}
