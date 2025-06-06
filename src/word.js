import React from 'react';

const Word = ({ word, guessedLetters }) => {
  return (
    <div>
      {word.split('').map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
          {" "}
        </span>
      ))}
    </div>
  );
};

export default Word;