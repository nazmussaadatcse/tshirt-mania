import React from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    return (
        <div className='grandpa' style={{display:'flex'}}>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
    );
};

export default Grandpa;