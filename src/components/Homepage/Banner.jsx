import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between h-[70vh] items-center gap-6'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl lg:text-5xl font-bold text-white mb-4'>Tanvir Rahman</h1>
                <p className='text-[#858383] text-md font-normal mb-7'>Currently, I am working with JavaScript technologies such as Next.js, React.js, Node.js, and Express.js to create scalable full-stack applications. I am also focusing significantly on vanilla JavaScript to clarify my concepts and deepen my understanding of it.</p>

                <ul className='flex gap-6 text-white'>
                    <Link href='https://www.linkedin.com/in/hellotanvir4/' className='flex items-center gap-2 text-[#faf0ca] font-semibold'><div className='w-3 h-3 bg-[#faf0ca] rounded-full'></div>LinkedIn</Link>
                    <Link href='https://github.com/tanvir244' className='flex items-center gap-2 text-[#fb6f92] font-semibold'><div className='w-3 h-3 bg-[#fb6f92] rounded-full'></div>Github</Link>
                    <Link href='https://www.facebook.com/tanvirrahman.saim.7' className='flex items-center gap-2 text-[#4ecdc4] font-semibold'><div className='w-3 h-3 bg-[#4ecdc4] rounded-full'></div>Facebook</Link>
                </ul>
            </div>
            <div className='w-full md:w-1/2 flex justify-end'>
                <Image className='rounded-2xl' alt='author' src="https://i.ibb.co/6mMsMt0/Untitled-design-5.png" width={400} height={400} />
            </div>
        </div>
    );
};

export default Banner;