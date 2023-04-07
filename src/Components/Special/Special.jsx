import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const golden = useContext(RingContext)
    return (
        <div className='border border-orange-400 p-2 mt-5'>
            <h2>Special</h2>
            <p className='font-normal text-red-700'>{ring}</p>
            <p>{golden}</p>
        </div>
    );
};

export default Special;