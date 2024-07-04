import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Homepage = () => {
    return (
        <div className='w-[90%] lg:max-w-6xl mx-auto'>
            <Navbar />
            <div className='flex flex-col md:flex-row justify-between h-[70vh] items-center gap-6'>
                <div className='w-full md:w-1/2 space-y-4'>
                    <h1 className='text-3xl lg:text-5xl font-bold text-white'>Tanvir Rahman Saim</h1>
                    <p className='text-[#858383] text-md font-normal'>As a passionate learner, I have dedicated myself to acquiring the skill set of web application development. Throughout this extensive journey, my primary focus has been on frontend development. Along the way, I have successfully completed numerous full-stack projects with a focus on frontend development.</p>
                </div>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <Image className='rounded-2xl' alt='author' src="https://i.ibb.co/6mMsMt0/Untitled-design-5.png" width={400} height={400}/>
                </div>
            </div>
        </div>
    );
};

export default Homepage;