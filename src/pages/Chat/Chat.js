import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Chat = () => {

    const { user } = useContext(AuthContext);

    const [messageUser, setMessageUser] = useState(null);
    const [messageGroup, setMessageGroup] = useState(null);
    const [allUser, setAllUser] = useState(null);
    const [group, setGroup] = useState(null);
    const navigate = useNavigate();


    

    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_api}allmembers`)
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, [])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_api}mymembers?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMessageUser(data))
    }, [user])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_api}allgroups`)
            .then(res => res.json())
            .then(data => setGroup(data))
    }, [])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_server_api}mygroups`)
            .then(res => res.json())
            .then(data => setMessageGroup(data))
    }, [])


    return (
        <div className=''>
            <div className="collapse mx-auto  my-[40px] drop-shadow shadow  w-[40%]  min-w-[300px] rounded-b border-2 border-b-2 border-green-500 text-center rounded-t">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-green-400  py-5 peer-checked:text-slate-700">
                    <h2 className='text-xl font-bold '>My Chat Members</h2>
                </div>
                <div className='collapse-content flex flex-col gap-2 rounded-b mx-0 px-0 mb-0 pb-0 '>
                    {
                        messageUser ? messageUser.map(user =>
                            <Link to={`/chat/${user._id}`} className='flex flex-row gap-3 items-center p-4  hover:bg-green-500 hover:text-white cursor-pointer'>
                                <div className="avatar px-0">
                                    <div className="w-10 rounded-full ">
                                        <img src={user?.photoURL} className='' />
                                    </div>
                                </div>
                                <a className='pl-2'>{user?.username}</a>
                            </Link>
                        ) : ''
                    }

                </div>

            </div>

            <div className="collapse mx-auto  my-[40px] drop-shadow shadow  w-[40%]  min-w-[300px] rounded-b border-2 border-b-2 border-green-500 text-center rounded-t">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-green-400  py-5 peer-checked:text-slate-700">
                    <h2 className='text-xl font-bold '>My Chat Groups</h2>
                </div>
                <div className='collapse-content flex flex-col gap-2 rounded-b mx-0 px-0 mb-0 pb-0 '>
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

            <div className="collapse mx-auto  my-[40px] drop-shadow shadow  w-[40%]  min-w-[300px] rounded-b border-2 border-b-2 border-green-500 text-center rounded-t">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-green-400  py-5 peer-checked:text-slate-700">
                    <h2 className='text-xl font-bold '>All Chat Members</h2>
                </div>
                <div className='collapse-content flex flex-col gap-2 rounded-b mx-0 px-0 mb-0 pb-0 '>
                    {
                        allUser && allUser.map(user =>
                            <Link to={`/chat/${user._id}`} className='flex flex-row gap-3 items-center p-4  hover:bg-green-500 hover:text-white cursor-pointer'>
                                <div className="avatar px-0">
                                    <div className="w-10 rounded-full ">
                                        <img src={user?.photoURL} className='' />
                                    </div>
                                </div>
                                <a className='pl-2'>{user?.username}</a>
                            </Link>
                        )
                    }

                </div>

            </div>

            <div className="collapse mx-auto  my-[40px] drop-shadow shadow  w-[40%]  min-w-[300px] rounded-b border-2 border-b-2 border-green-500 text-center rounded-t">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  peer-checked:bg-green-400  py-5 peer-checked:text-slate-700">
                    <h2 className='text-xl font-bold '>All Chat Groups</h2>
                </div>
                <div className='collapse-content flex flex-col gap-2 rounded-b mx-0 px-0 mb-0 pb-0 '>
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


        </div>
    );
};

export default Chat;