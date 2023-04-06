import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData();
    console.log(shirts)
    return (
        <div>
            <h2>This is home: {shirts.length}</h2>
        </div>
    );
};

export default Home;