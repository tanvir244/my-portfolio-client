import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='w-[90%] lg:max-w-6xl mx-auto'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Homepage;