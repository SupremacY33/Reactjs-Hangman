import React, { useState } from 'react';
import Word from './word';
import Keyboard from './keyword';
import HangmanDraw from './hangman';
import './App.css';

const words = [
  "dramatic",
  "background",
  "decade",
  "bell",
  "separation",
  "occupy",
  "miscarriage",
  "graduate",
  "speech",
  "blonde"
];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const maxWrong = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const isGameOver = wrongGuesses >= maxWrong;
  const isWinner = word.split('').every(letter => guessedLetters.includes(letter));

  return (
    <div className="App">
      <h1>Welcome To Hangman</h1>
      <HangmanDraw numberOfGuess={wrongGuesses} />
      <br />
      <Word word={word} guessedLetters={guessedLetters} />
      <br />
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} word={word} />
      {isGameOver && <p>Game Over! The Guessing word was {word}</p>}
      {isWinner && <p>Congratulations! You've won!</p>}
    </div>
  );
}

export default App;