import React from "react";

const PlayerCard = props => {
  return (
    <div>
      {props.playerData.map(item => {
        return (
          <div className="player-card">
            <h1>{item.name}</h1>
            <h3>Number of Searches: {item.searches}</h3>
            <p>Country: {item.country}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PlayerCard;
