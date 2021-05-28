import React, { FunctionComponent } from 'react';
import './TryAgain.css';

interface TryAgainProps {
  characters: number,
  words: number,
  wpm: number
}

const TryAgain: FunctionComponent<TryAgainProps> = ({
  characters,
  words,
  wpm
}) => {
  return (
    <div className="try-again-container">
      <h1> Test Results!</h1>
      <div className="result-container">
        <p><b>Characters</b> : {characters}</p>
        <p><b>Words</b> : {words}</p>
        <p><b>Wpm</b> : {wpm}</p>
      </div>
       
    </div>
  );
}

export default TryAgain;