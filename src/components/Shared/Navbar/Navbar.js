import { Link, useLocation } from 'react-router-dom';

import React from 'react';

const Navbar = () => {

    const location = useLocation();
    const active = location.pathname.split('/')[1];

    const navbar = <>
        <li className='hover:underline '>
            {
                active == '' ?
                    <Link to='/' className='hover:bg-green-100 bg-green-100 text-green-500'>Home</Link> : <Link to='/' className='hover:bg-green-100 bg-green-100'>Home</Link>
            }
        </li>
        <li className='hover:underline'>
            {
                active == 'chat' ?
                    <Link to='/chat' className='hover:bg-green-100 bg-green-100 text-green-500'>Chat</Link> : <Link to='/chat' className='hover:bg-green-100 bg-green-100'>Chat</Link>
            }
        </li>
        <li className='hover:underline'>
            {
                active == 'about' ?
                    <Link to='/about' className='hover:bg-green-100 bg-green-100 text-green-500'>About us</Link> : <Link to='/about' className='hover:bg-green-100 bg-green-100'>About us</Link>
            }
        </li>
        <li className='hover:underline'>
            {
                active == 'contact' ?
                    <Link to='/contact' className='hover:bg-green-100 bg-green-100 text-green-500'>Conatct</Link> : <Link to='/contact' className='hover:bg-green-100 bg-green-100'>Conatct</Link>
            }
        </li>
        <li className='hover:underline'>
            {
                active == 'login' ?
                    <Link to='/login' className='hover:bg-green-100 bg-green-100 text-green-500'>Login</Link> : <Link to='/login' className='hover:bg-green-100 bg-green-100'>Login</Link>
            }
        </li>
        <li className='hover:underline'> {
            active == 'register' ?
                <Link to='/chat' className='hover:bg-green-100 bg-green-100 text-green-500'>Register</Link> : <Link to='/register' className='hover:bg-green-100 bg-green-100'>Register</Link>
        }
        </li>
        <li><div className="avatar bg-green-100 hover:bg-green-100">
            <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 ">
                <img src="https://i.pngimg.me/thumb/f/720/comvecteezy420553.jpge" />
            </div>
        </div></li>
    </>

    return (
        <div>
            <div className="navbar bg-green-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">SuperChat</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navbar}
                    </ul>
                </div>

            </div>
        </div>
    );

}

export default Navbar;