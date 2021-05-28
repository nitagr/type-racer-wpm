import React from 'react';
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
       <h1 data-aos = "fade-down" className="challenge-section-header">
         Take Type test!
       </h1>
       <TestContainer characters={50} words={10} wpm={10} />
    </div>
  );
}

export default ChallengeSection;