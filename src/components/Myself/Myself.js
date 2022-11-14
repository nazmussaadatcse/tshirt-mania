import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    return (
        <div>
            <h2>Myself</h2>
            <p>House:{props.house}</p>
            <Special ornaments={props.ornaments}></Special>
        </div>
    );
};

export default Myself;