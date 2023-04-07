import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div className='border border-orange-400 p-2'>
            <h2>Sister</h2>
            <p>{money}</p>
        </div>
    );
};

export default Sister;