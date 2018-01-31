import React from 'react';
import GuessForm from './guess-form';
import './guess.css';

export default function GuessSection(props) {
  return (
    <section id="guess" >
      <h2 id="guess-title">{props.feedback}</h2>
      <GuessForm  />
    </section>
  );
}
