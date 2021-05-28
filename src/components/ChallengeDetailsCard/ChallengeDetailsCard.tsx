import React, { FunctionComponent } from "react";
import "./ChallengeDetailsCard.css";

interface ChallengeDetailsCardProps {
  cardName: string,
  cardValue: number
}

const ChallengeDetailsCard: FunctionComponent<ChallengeDetailsCardProps> = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    );
};

export default ChallengeDetailsCard;