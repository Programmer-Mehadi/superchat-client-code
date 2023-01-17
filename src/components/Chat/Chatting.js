
import React from 'react';
import { BiSend } from "react-icons/bi";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Chatting = () => {
    return (
        <div className='max-w-[800px] mx-auto my-[80px] shadow drop-shadow rounded'>
            <div className='flex flex-row gap-3 justify-between  items-center bg-green-500 text-white p-3 rounded-t'>
                <div className='flex gap-8 items-center '>
                    <Link to='/chat'>   <BsArrowLeft className='text-xl font-bold cursor-pointer'></BsArrowLeft></Link>
                    <div className='flex items-center gap-2'>
                        <div className="avatar px-0">
                            <div className="w-10 rounded-full ">
                                <img src="https://placeimg.com/192/192/people" className='' />
                            </div>
                        </div>
                        <a className='pl-0'>Muhammad Sakib</a>
                    </div>
                </div>
                <div className='text-xl cursor-pointer'><BsThreeDotsVertical></BsThreeDotsVertical></div>
            </div>
            {/*  Messgae body */}
            <div className='py-5 px-10'>

                {/*  message list */}
                <div>
                    <div className='flex justify-start mb-5'>
                        <p className='p-2 rounded border shadow-sm shadow-blue-400  border-blue-400 w-[50%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, facere.</p>
                    </div>
                    <div className='flex justify-end'>
                        <p className='p-2 rounded shadow-sm shadow-green-400  border border-green-400 w-[50%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, facere.</p>
                    </div>
                </div>
                {/* send message */}
                <div className='flex my-10'>
                    <input type="text" placeholder="Type here..." className="input input-bordered input-success w-full rounded-r-none rounded-l-md" />
                    <div className='bg-green-500 flex justify-center text-2xl items-center rounded-r text-white w-[50px] cursor-pointer'>
                        <BiSend></BiSend>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Chatting;