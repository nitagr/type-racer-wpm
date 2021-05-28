import React, {FunctionComponent} from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TestContainer.css';

interface TestContainerProps {
  characters: number,
  words: number,
  wpm: number
}

const TestContainer: FunctionComponent<TestContainerProps> = ({
  characters,
  words,
  wpm
}) => {
  return (
    <div className="test-container">
      <div className="typing-challenge-cont" data-aos="fade-up">
        <TypingChallenge characters={characters} words={words} wpm={wpm} />
      </div>
      <div className="try-again">
        <TryAgain
          characters={characters}
          words={words}
          wpm={wpm}
        />
      </div>
    </div>
  );
}

export default TestContainer;