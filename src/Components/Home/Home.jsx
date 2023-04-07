import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = (shirt) =>{
        const exist = cart.find(ts => ts.id === shirt.id);
        if(exist){
            toast("Wow so easy!");
        }else{
            const newCart = [...cart, shirt];
            setCart(newCart)
        }
    }

    const handleDeleteCart = id =>{
        const remaining = cart.filter(ts => ts.id !== id);
        setCart(remaining);
    }

    return (
        <div className='flex justify-around mt-10 gap-20 px-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    shirts.map(shirt => <Tshirt
                        key={shirt.id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='w-96'>
                <Cart 
                cart={cart}
                handleDeleteCart={handleDeleteCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;