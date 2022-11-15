import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const updateHouse = ()=>{
        const newHouse=house+2;
        setHouse(newHouse);
    }
    return (
        <div>
            <h2>Aunty</h2>
            <p>House:{house}</p>
            <button onClick={updateHouse}>Buy House</button>
        </div>
    );
};

export default Aunty;