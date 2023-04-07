import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const golden = useContext(RingContext)
    return (
        <div className='border border-orange-400 p-2 mx-2'>
            <h2>Brother</h2>
            <p>{golden}</p>
        </div>
    );
};

export default Brother;