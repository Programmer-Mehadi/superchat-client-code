import React from 'react';

import group from '../../asset/icons/group.svg';
import messages from '../../asset/icons/messages.svg';
import users from '../../asset/icons/users.svg';
import world from '../../asset/icons/world.svg';


const Facts = () => {
    return (
        <div className='max-w-[95%] mx-auto my-[90px]'>
            <h2 className='text-green-500 font-extrabold text-4xl'>Our Some Facts</h2>
            <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti cupiditate nobis et quas tenetur laborum, tempore sapiente cumque.</p>
            <div className='flex gap-10 justify-evenly mt-[60px]' >
                <div className='flex flex-col gap-3 justify-center items-center text-center px-14 py-4 rounded  border-2 border-green-500 hover:bg-green-300 transition ease-in shadow-sm'>
                    <img className='w-[80px]' src={users} alt="" />
                    <h2 className='text-xl font-bold'>200+</h2>
                    <p className='text-xl'>Users</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-center px-14 py-4 rounded  border-2 border-green-500 hover:bg-green-300 transition ease-in shadow-sm'>
                    <img className='w-[80px]' src={messages} alt="" />
                    <h2 className='text-xl font-bold'>1.5+ Million</h2>
                    <p className='text-xl'>Messages</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-center px-14 py-4 rounded  border-2 border-green-500 hover:bg-green-300 transition ease-in shadow-sm'>
                    <img className='w-[80px]' src={group} alt="" />
                    <h2 className='text-xl font-bold'>700k+</h2>
                    <p className='text-xl'>Group</p>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center text-center px-14 py-4 rounded  border-2 border-green-500 hover:bg-green-300 transition ease-in shadow-sm'>
                    <img className='w-[80px] ' src={world} alt="" />
                    <h2 className='text-xl font-bold'>107+</h2>
                    <p className='text-xl'>Countries</p>
                </div>
            </div>
        </div>
    );
};

export default Facts;