import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ playerInfo }) => {
  return (
    <div className="wrapper">
      {playerInfo.map(player => {
        return (
          <PlayerCard
            id={player.id}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        );
      })}
    </div>
  );
};

export default PlayerList;
