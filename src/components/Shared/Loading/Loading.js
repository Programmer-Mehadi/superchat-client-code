import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <progress className="progress max-w-[200px] mx-auto"></progress>
        </div>
    );
};

export default Loading;