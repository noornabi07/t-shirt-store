import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div className='border border-orange-400 p-8'>
            <h2>Aunty</h2>
            <section className='flex mt-4'>
                <Cousin>Nirab</Cousin>
                <Cousin friend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;