import {MAKE_GUESS, RESTART_GAME} from '../actions';

const initialState = {
  guesses: [],
  answer: Math.round(Math.random() * 100),
  feedback: 'Make your guess!'
}

export default (state=initialState, action) => {
  if (action.type === MAKE_GUESS) {
  let feedback, guess;

    guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      feedback = 'Please enter a valid number';

      return {
        ...state,
        feedback,
        guesses: [...state.guesses, guess]
       }
    }

    // this.props.dispatch(makeGuess(guess))
    const diff = Math.abs(guess - state.answer);

    if (diff >= 30) {
      feedback = `You are cold`;
    }
    else if (diff >= 10) {
      feedback = `You are warm`;
    }
    else if (diff >= 1 ) {
      feedback = `You are hot`;
    }
    else {
      feedback = `You got it`;
    }

    return {
      ...state,
      feedback,
      guesses: [...state.guesses, guess]
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
