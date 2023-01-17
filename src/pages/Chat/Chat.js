import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div className='mx-auto  my-[90px] drop-shadow shadow  border-green-500 w-fit  min-w-[300px] rounded-b'>
            <h2 className='text-xl font-bold border-2 border-b-2 border-green-500 text-center py-5 rounded-t'>All Chat Members</h2>
            <div className='flex flex-col gap-2 rounded-b '>
                <Link to='/chat/hello' className='flex flex-row gap-3 items-center p-4  hover:bg-green-500 hover:text-white cursor-pointer'>
                    <div className="avatar px-0">
                        <div className="w-10 rounded-full ">
                            <img src="https://placeimg.com/192/192/people" className='' />
                        </div>
                    </div>
                    <a className='pl-2'>Muhammad Sakib</a>
                </Link>
                <Link to='/chat/hello' className='flex flex-row gap-3 items-center p-4  hover:bg-green-500 hover:text-white cursor-pointer rounded-b'>
                    <div className="avatar px-0">
                        <div className="w-10 rounded-full ">
                            <img src="https://placeimg.com/192/192/people" className='' />
                        </div>
                    </div>
                    <a className='pl-2'>Muhammad Sakib</a>
                </Link>
            </div>
        </div>
    );
};

export default Chat;