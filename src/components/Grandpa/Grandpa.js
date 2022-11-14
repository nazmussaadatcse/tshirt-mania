import React from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext = createContext('Diamond');

const Grandpa = () => {

 

    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornaments}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p>House:{house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;