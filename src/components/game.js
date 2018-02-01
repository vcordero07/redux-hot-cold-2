import React from 'react';
import {connect} from 'react-redux';

import './game.css';

import GuessSection from './guess-section';
import FeedbackSection from './feedback';
import InfoSection from './info'

import { restartGame } from '../actions';

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

                onClick={() => this.props.dispatch(restartGame())}
                >+ new game
              </a>
            </li>
            </ul>
          </nav>
          <h1 >Hot or Cold</h1>
        </header>
        <main>
          <GuessSection
           feedback={this.props.feedback}
            // onMakeGuess={this._makeGuess}
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
    guesses: state.guesses,
    feedback: state.feedback
  }
}

export default connect(mapStateToProps)(Game);
