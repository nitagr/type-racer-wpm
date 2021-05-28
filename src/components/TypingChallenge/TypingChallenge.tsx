import React, { FunctionComponent } from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallenge.css';

interface TypingChallengeProp {
  characters: number,
  words: number,
  wpm: number
}
const TypingChallenge: FunctionComponent<TypingChallengeProp> = ({
  characters,
  words,
  wpm
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeDetailsCard cardName="words" cardValue={words} />
        <ChallengeDetailsCard cardName="characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
      </div>
      <div className="typewriter-container">
        <p>This is real challenge
        </p>
      </div>
    </div>

  );
}

export default TypingChallenge;