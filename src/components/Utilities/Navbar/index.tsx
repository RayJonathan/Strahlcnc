"use client"

import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='w-full h-24 bg-white z-50'>
            <div className='flex gap-11 justify-between items-center h-full w-full px-5 md:px-16 2xl:px-24 xl:px-20'>
                {/* Burger menu icon for mobile view */}
                <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
                {/* Logo */}
                <Link href="/" className='sm:hidden'>
                    <img
                        src='/logo.png'
                        alt='Logo'
                        width={205}
                        height={75}
                        style={{
                            width: 'auto', // Allows the image to maintain its aspect ratio
                            height: '75px' // Ensures the image height is consistent
                        }}
                        className='object-contain' // Ensures the image scales correctly within its container
                    />
                </Link>
                {/* Links for desktop view */}
                <div className='hidden sm:flex flex-grow justify-end'>
                    <ul className='flex'>
                        <Link href='/'>
                            <li className='ml-10 2xl:text-2xl md:text-lg sm:text-sm hover:text-blue-500'>Home</li>
                        </Link>

                        <Link href="/#info">
                            <li className='ml-10 2xl:text-2xl md:text-lg sm:text-sm hover:text-blue-500 cursor-pointer'>About</li>
                        </Link>
                        <Link href='/#products'>
                            <li className='ml-10 2xl:text-2xl md:text-lg sm:text-sm hover:text-blue-500'>Products</li>
                        </Link>
                        <Link href='/#footer'>
                            <li className='ml-10 2xl:text-2xl md:text-lg sm:text-sm hover:text-blue-500'>Contact Us</li>
                        </Link>
                    </ul>
                </div>
                {/* Logo for desktop view */}
                <Link href="/" className='hidden sm:block sm:order-first'>
                    <img
                        src='/logo.png'
                        alt='Logo'
                        width={205}
                        height={75}
                        style={{ width: '205px', height: '75px' }}
                    />
                </Link>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-full bg-[#ecf0f3] p-10 ease-in duration-500 z-50"
                    : "fixed left-[-100%] top-0 p-10 h-full ease-in duration-500 z-50"
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <Link href='/'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Home
                            </li>
                        </Link>
                        <Link href='/#info'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                About
                            </li>
                        </Link>
                        <Link href='/#products'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Products
                            </li>
                        </Link>
                        <Link href='/#footer'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 cursor-pointer'
                            >
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
