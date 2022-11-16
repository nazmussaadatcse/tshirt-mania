import React from 'react';
// import { useContext } from 'react';
// import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornaments}) => {
    // const [ornaments] = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Grandpa Gift:{ornaments}</p>
        </div>
    );
};

export default Special;