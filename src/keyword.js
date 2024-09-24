import React from 'react';
import './Keyboard.css';

const keys = "abcdefghijklmnopqrstuvwxyz".split('');

const Keyboard = ({ handleGuess, guessedLetters, word }) => {
  return (
    <div className="keyboard">
      {keys.map(letter => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = word.includes(letter);
        let className = "";

        if (isGuessed) {
          className = isCorrect ? "correct" : "incorrect";
        }

        return (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            className={className}
            disabled={isGuessed}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;