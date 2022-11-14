import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({ house,ornaments }) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House:{house}</p>
            <div style={{display:'flex'}}>
                <Myself house={house} ornaments={ornaments}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;