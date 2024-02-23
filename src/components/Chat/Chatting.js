
import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiSend } from "react-icons/bi";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Chatting = () => {
    const { user } = useContext(AuthContext);
    const id = useLocation().pathname.split('/')[2];
    console.log(id)

    const [userInfo, setUserInfo] = useState(null);
    const [allMessages, setAllMessages] = useState(null);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        if (user) {
            fetch(`${process.env.REACT_APP_server_api}messagehistory?id=${id}&email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setAllMessages(data.messages)
                    setUserInfo(data.userInfo)
                })
        }
    }, [user, refetch])

    const messageField = useRef();



    const handleMessageSubmit = () => {
        const time = new Date()

        const date = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
        let t = ''
        if (time.getHours() >= 13) {
            t = `${time.getHours() - 12}:${time.getMinutes()}`;
        }
        else {
            t = `${time.getHours()}:${time.getMinutes()}`;
        }
        const value = messageField.current.value;
        const message = {
            sender: user?.email,
            receiver: userInfo?.email,
            message: value,
            time: `${date} ${t}`
        }
        fetch(`${process.env.REACT_APP_server_api}messageadd`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                messageField.current.value = '';
                toast('Send message!');
                setRefetch(!refetch)
            })
    }
    return (
        <div className='max-w-[800px] mx-auto my-[80px] shadow drop-shadow rounded'>
            <div className='flex flex-row gap-3 justify-between  items-center bg-green-500 text-white p-3 rounded-t'>
                <div className='flex gap-8 items-center '>
                    <Link to='/chat'>   <BsArrowLeft className='text-xl font-bold cursor-pointer'></BsArrowLeft></Link>
                    <div className='flex items-center gap-2'>
                        <div className="avatar px-0">
                            <div className="w-10 rounded-full ">
                                <img src={userInfo?.photoURL} className='' />
                            </div>
                        </div>
                        <a className='pl-0'>{userInfo?.username}</a>
                    </div>
                </div>
                <div className='text-xl cursor-pointer'><BsThreeDotsVertical></BsThreeDotsVertical></div>
            </div>
            {/*  Messgae body */}
            <div className='py-5 px-10'>

                {/*  message list */}
                <div>
                    {
                        allMessages && allMessages.map(m =>

                            m.sender === user?.email ?
                                <div className='flex flex-col justify-end items-end mb-5'>
                                    <p className='p-2 rounded shadow-sm shadow-green-400  border border-green-400 w-[45%]'>{m.message}</p>
                                    <span className='text-slate-500'>{m.time}</span>
                                </div> : <div className='flex flex-col items-start justify-start mb-5'>
                                    <p className='p-2 rounded border shadow-sm shadow-blue-400  border-blue-400 w-[45%]'>{m.message}</p>
                                    <span className='text-slate-500'>{m.time}</span>
                                </div>

                        )
                    }
                </div>
                {/* send message */}
                <div className='flex my-10'>
                    <textarea type="text" placeholder="Type here..." className="input input-bordered input-success w-full rounded-r-none rounded-l-md" ref={messageField} />
                    <div onClick={handleMessageSubmit} className='bg-green-500 flex justify-center text-2xl items-center rounded-r text-white w-[50px] cursor-pointer'>
                        <BiSend></BiSend>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Chatting;