import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children, friend, ring}) => {
    return (
        <div className='border border-orange-400 p-2 mr-2'>
            <h2>Cousin</h2>
            <p className='mt-8 font-normal'>{children}</p>
            {friend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;