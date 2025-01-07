import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1612966808160-87a819e0af82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex flex-col justify-between w-full'>
                <img
                    className='w-24 ml-8 rounded-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzq-OiKDq-RGQ4-8UB3SCxf26gNYBFcv9pw&s'
                    alt="GoCabs Logo"
                />
                <div className='bg-white pb-8 py-6 px-6 rounded-t-3xl shadow-xl'>
                    <h2 className='text-[28px] font-semibold text-gray-800'>Join GoCabs Today</h2>
                    <p className='text-gray-600 mt-2'>
                        Discover a world of possibilities with GoCabs. Let’s get you started!
                    </p>
                    <Link
                        to='/login'
                        className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 hover:bg-gray-800 transition duration-300'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Start;
