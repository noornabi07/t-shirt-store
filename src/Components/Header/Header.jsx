import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-900 text-white font-semibold text-2xl py-4 text-center'>
            <Link className='px-4 hover:text-orange-500' to="/">Home</Link>
            <Link className='px-4 hover:text-orange-500' to="/orders">Orders</Link>
            <Link className='px-4 hover:text-orange-500' to="/grandpa">Grandpa</Link>
            <Link className='px-4 hover:text-orange-500' to="/about">About</Link>
            <Link className='px-4 hover:text-orange-500' to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;