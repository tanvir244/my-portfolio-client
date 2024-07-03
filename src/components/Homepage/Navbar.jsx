import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navItems = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Resume",
            path: "/resume"
        },
        {
            title: "Projects",
            path: "/projects"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Contacts",
            path: "/contacts"
        },
    ]

    return (
        <div className="navbar max-w-6xl mx-auto text-white py-6">
            <div className="flex-1">
                <Link href={'/'}>
                    <Image alt='logo' src={'/logo3.png'} width={60} height={40}/>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(item => (
                        <li key={item.path}><Link href={item.path}>{item.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;