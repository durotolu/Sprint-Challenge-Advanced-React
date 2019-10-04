import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import PlayerData from './PlayerData';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerData playersInfo={[
        {
            "name": "Alex Morgan",
            "country": "United States",
            "searches": 100,
            "id": 0
        },
        {
            "name": "Megan Rapinoe",
            "country": "United States",
            "searches": 99,
            "id": 1
        },
        {
            "name": "Marta",
            "country": "Brazil",
            "searches": 18,
            "id": 2
        },
        {
            "name": "Rose Lavelle",
            "country": "United States",
            "searches": 11,
            "id": 3
        }]} />)
});

describe('PlayerData component', () => {
    it('can debug the output', () => {
        tools.debug();
    });
    // it('maps through data given', () => {
    //     const players = [{
    //                 name: "Alex Morgan",
    //                 country: "United States",
    //                 searches: 100,
    //                 id: 0
    //             }]
    //     expect(PlayerData.PlayerData(players))
    //     .toBe(['Alex Morgan', 'United States', 100, 0])
    // })
    // it('renders a person with name, country and searches', () => {

    //     const players = [{
    //         name: "Alex Morgan",
    //         country: "United States",
    //         searches: 100,
    //         id: 0
    //     }]

    //     expect(PlayerData.PlayerData(players[0]))
    //     .toMatchObject({
    //             name: "Alex Morgan",
    //             country: "United States",
    //             searches: 100,
    //             id: 0
    //         })
    // })
    //it()
})