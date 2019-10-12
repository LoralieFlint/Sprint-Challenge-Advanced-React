import React from "react";

const PlayerCard = ({name, searches, country, id}) => {
    return (
        <div>
            <h1>name={name}</h1>
            <h3>country={country}</h3>
            <p>searches={searches}</p>
            <p>id={id}</p>
        </div>
    )
}

export default PlayerCard;