import React, { useState, useEffect } from'react';

const PlayerData = ({ playersInfo }) => {

    return (
        <div>
            {playersInfo.map((player) => (
                <div>
                    <div>{player.name}</div>
                    <div>{player.id}</div>
                    <div>{player.country}</div>
                    <div>{player.searches}</div>
                </div>
            ))}
        </div>
    )
}

export default PlayerData;