import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from 'react-icons/md';
import Link from "next/link";
import { FaInstagram, FaTiktok } from 'react-icons/fa';
function Footer() {
    return (
        <div id="footer" className="footer-bg">
            <div className='h-1/2w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-20 justify-center items-start'>
                <div className='p-5 z-10'>
                    <ul>
                        <p className='text-white font-bold 2xl:text-3xl md:text-2xl sm:text-xl text-lg pb-4'>SITEMAP</p>
                        <Link href='/#info'>
                            <li className='text-white 2xl:text-lg md:text-md text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                About
                            </li>
                        </Link>

                        <Link href='/#products'>
                            <li className='text-white 2xl:text-lg md:text-md text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                                Products
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='p-5 z-10'>
                    <ul>
                        <p className='text-white font-bold 2xl:text-3xl md:text-2xl sm:text-xl text-lg pb-4'>Social Media</p>

                        <li id="instagram" className='flex items-center text-white 2xl:text-lg md:text-md text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            <FaInstagram className='mr-2' />
                            <a href="https://www.instagram.com/strahl.cnc" target="_blank" rel="noopener noreferrer">
                                strahl.cnc
                            </a>
                        </li>

                        <li id="tiktok" className='flex items-center text-white 2xl:text-lg md:text-md text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                            <FaTiktok className='mr-2' />
                            <a href="https://www.tiktok.com/@strahl.cnc.laser" target="_blank" rel="noopener noreferrer">
                                TikTok
                            </a>
                        </li>

                    </ul>
                </div>
                <div className='p-5 z-10'>
                    <ul>
                        <p className='text-white font-bold 2xl:text-3xl md:text-2xl sm:text-xl text-lg pb-4'>Contact</p>
                        <li className='text-white flex text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>
                            <MdLocationPin className='2xl:text-3xl md:text-2xl sm:text-xl text-lg' />
                            <a
                                href="https://maps.app.goo.gl/SqGGkWh4H3MordfG6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='pl-2 2xl:text-lg md:text-md text-xs'
                            >
                                Bandung, Ruko Soho Sommerville No.21.
                            </a>
                        </li>
                        <li className='text-white flex text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>
                            <IoCall className='2xl:text-3xl md:text-2xl sm:text-xl text-lg' /><span className='pl-2 2xl:text-lg md:text-md text-xs'>+62 85524970078</span>
                        </li>
                        <li className='text-white flex text-md pb-4 font-semibold hover:text-blue-600 cursor-pointer'>
                            <IoMdMail className='2xl:text-3xl md:text-2xl sm:text-xl text-lg' />
                            <a
                                href="mailto:strahlcnc@cnc.com"
                                className='pl-2 2xl:text-lg md:text-md text-xs'
                            >
                                strahlcnc@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center items-center my-2'>
                <hr className='border-2 border-white md:w-7/12 w-4/5 z-10' />
            </div>
            <div className='flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center py-5 2xl:px-24 md:px-20 sm:px-16 px-3 z-10'>
                <img
                    src='/logo-white.png'
                    alt='Logo'
                    className='2xl:py-0 md:py-0 sm:py-0 py-2 w-36 h-18 md:w-36 pb-5 md:h-10 z-10'
                />
                <h1 className='text-white md:pl-16 md:text-sm text-sm font-semibold py-2'>&copy; 2024 STRAHL. All Rights Reserved. <span className='text-blue-700 cursor-pointer'>Beign Studio</span></h1>
            </div>
        </div>
    )
}

export default Footer
