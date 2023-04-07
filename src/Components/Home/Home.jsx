import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const shirts = useLoaderData();
    // console.log(shirts)
    return (
        <div className='flex justify-around mt-10 gap-20 px-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    shirts.map(shirt => <Tshirt
                        key={shirt._id}
                        shirt={shirt}
                    ></Tshirt>)
                }
            </div>
            <div className='w-96'>
                <h2>Ordered Summary</h2>
            </div>
        </div>
    );
};

export default Home;