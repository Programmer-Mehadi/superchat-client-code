import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-75 " style={{
                    // background: 'rgb(2, 0, 36)',
                    background: 'linear - gradient(360deg, rgba(2, 0, 36, 1) 0 %, rgba(9, 9, 121, 0.8717612044817927) 41 %, rgba(0, 212, 255, 0.3927696078431373) 97 %)'
                }}></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Welcome to <br />
                            <span className='text-6xl text-green-600'>SuperChat</span>
                        </h1>
                        <p className="mb-5">Would You Give Someone Your Last Chat?</p>
                        <Link to='/chat' className="btn btn-success">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;