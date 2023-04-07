import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='border border-orange-400 p-8 mx-3'>
            <h2>Uncle</h2>
            <p>Have Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)} className='border mt-3 border-gray-500 p-2 bg-red-500 text-white rounded-lg'>Send 1000tk</button>
            <section className='flex mt-4'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;