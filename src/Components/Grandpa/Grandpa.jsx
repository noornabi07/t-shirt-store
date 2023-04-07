import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Golden')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='border text-center border-orange-500 w-[800px] mx-auto mt-10 p-5'>
            <h2 className='text-center font-bold text-2xl mt-6'>Grandpa</h2>
            <p>Have Money= {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='Golden'>
                    <section className='mt-5 font-bold flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;