import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions';
import './guess.css';

export class GuessForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(makeGuess(this.state.inputValue));

    this.setState({
      inputValue: ''
    })

  }
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="number"
            min="1"
            max="100"
            name="userGuess"
            id="userGuess"
            className="text"
            autoComplete="off"
            aria-labelledby="feedback"
            value={this.state.inputValue}
            onChange={this._onChange}
            required
            disabled={this.props.btnDisabled}
            />
          <button
            type="submit"
            name="submit"
            id="guessButton"
            className="button"
            disabled={this.props.btnDisabled}
            >Guess
          </button>
        </form>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    btnDisabled: !!(state.guesses.find(guess => guess === state.answer)) //Boolean(state.guesses.find(guess => guess === state.answer))
  }
}

export default connect(mapStatetoProps)(GuessForm);
