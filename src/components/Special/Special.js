import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornaments}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Grandpa Gift:{ring}</p>
        </div>
    );
};

export default Special;