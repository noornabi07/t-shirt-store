import React from 'react';

const Cart = ({ cart, handleDeleteCart }) => {
    let message;
    if(cart.length === 0){
        message = 'salar beta add korek product'
    }
    else{
       message = <div>
            <h2 className='font-bold text-lime-500'>Boroloxx</h2>
            <p className='font-bold mb-4'>Thanks for buying product</p>
        </div>
    }
    return (
        <div className='bg-slate-900 p-4 text-white rounded sticky top-5 text-center'>
            <h2 className={`text-center font-semibold text-2xl mb-4 ${cart.length == 1 ? 'text-lime-500' : 'text-red-600'}`}>Ordered Summary: {cart.length}</h2>
            {cart.length > 2 ? 'Onek Thankd' : <span>Fokira</span>} <br />

            {message}
            <div className='font-semibold text-lg'>
                {
                    cart.map(shirt => <p className='mb-3'
                        key={shirt.id}
                    >
                        {shirt.name.slice(0, 7)}
                        <button onClick={() => handleDeleteCart(shirt.id)} className='ml-3 bg-lime-400 hover:bg-red-500 px-2 rounded-full'>X</button>
                    </p>)
                }
                {
                    cart.length == 2 && <p>Double Bonus!!!</p>
                }
                {
                    cart.length === 3 || <p>Tinta to hoynay</p>
                }
            </div>
        </div>
    );
};

export default Cart;