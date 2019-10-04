import React, { useState, useEffect } from'react';
import useLocalStorage from './Hook'


const PlayerData = ({ playersInfo }) => {

    const [topFive, setTopFive] = useLocalStorage('top5', '')
    
    useEffect(() => {
        const arrayname = playersInfo.filter((player) => player.id < 5)
        setTopFive(arrayname)
    }, [playersInfo])

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