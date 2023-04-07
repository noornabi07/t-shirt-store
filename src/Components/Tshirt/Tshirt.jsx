import React from 'react';

const Tshirt = ({ shirt }) => {
    const { img, name, price } = shirt;
    return (
        <div className='w-72 border-4 border-gray-300 rounded-lg relative py-3'>
            <img className='w-full p-3' src={img} alt="" />
            <div className=''>
                <p className='font-bold text-red-600 ml-3'>{name}</p>
                <p className='font-bold ml-3 my-3'>Price: <span className='text-red-600'>${price}</span></p>
                <div className='mt-10'>
                <button className='bg-slate-900 w-full text-white absolute bottom-0 font-bold py-2 px-4 rounded'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;