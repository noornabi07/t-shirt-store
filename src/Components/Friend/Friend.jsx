import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            <p className='font-normal text-red-600'>{ring}</p>
        </div>
    );
};

export default Friend;