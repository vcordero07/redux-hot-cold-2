import React from 'react';
import {connect} from 'react-redux';

import './game.css';

import GuessSection from './guess'
import FeedbackSection from './feedback'
import InfoSection from './info'

import { makeGuess } from '../actions';

class Game extends React.Component {
constructor(props){
  super(props);
  this.state = {
    on: false,
    gameInfo: false,
    guesses: [],
    answer: Math.round(Math.random() * 100),
    feedback: 'Make your guess!'
  }
}

  _displayInfo = () => {
    this.setState({
      gameInfo: !this.state.gameInfo
    });
  }

  _newGame = () => {
    this.setState({
      gameInfo: false,
      guesses: [],
      answer: Math.round(Math.random() * 100),
      feedback: 'Make your guess!'
    });
  }

  _makeGuess = (guess) => {
    if (isNaN(guess)) {
      this.setState({ feeback: 'Please enter a valid number'});
      return
    }
    this.props.dispatch(makeGuess(guess))
    const diff = Math.abs(guess - this.state.answer);

    let feedback;
    if (diff >= 30) {
      feedback = `You are cold`;
    }
    else if (diff >= 10) {
      feedback = `You are warm`;
    }
    else if (diff >= 1) {
      feedback = `You are hot`;
    }
    else {
      feedback = `You got it`;
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
            <li><a
                href="#info"
                className="info"
                onClick={this._displayInfo}
                >info
                </a>
            </li>
              <li>
              <a
                href="#new-game"
                className="new-game"
                onClick={this._newGame}
                >+ new game
              </a>
            </li>
            </ul>
          </nav>
          <h1 >Hot or Cold</h1>
        </header>
        <main>
          <GuessSection
            feedback={this.state.feedback}
            onMakeGuess={this._makeGuess}
            />
          <FeedbackSection
            guessList={this.props.guesses.join(', ')}
            guessCount={this.props.guesses.length}
            />
          <div style={{display: this.state.gameInfo ? 'block' : 'none' }}>
          <InfoSection  /></div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(Game);
