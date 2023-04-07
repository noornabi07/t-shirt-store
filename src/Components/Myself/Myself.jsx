import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className='border border-orange-400 p-2'>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;