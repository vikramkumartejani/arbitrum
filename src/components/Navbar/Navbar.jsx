import React, { useState, useEffect }  from 'react';
import DarkLogo from '../../assets/logo.svg'
import WhiteLogo from '../../assets/BlackLogo.svg'
import { FaRegCircle } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Navbar = ({ toggleTheme, darkMode }) => {
    const [hideOnScroll, setHideOnScroll] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const shouldBeHidden = currentScrollPos > 0;
        setHideOnScroll(shouldBeHidden);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
}, []);
    return (
        <div className='w-full mb-10'>
        {/* hide on scroll down */}
        {!hideOnScroll && (
                <div className='bg-bg_100'>
                    <p className='text-sm dark:text-black text-white lg:px-3 px-2 lg:py-2.5 py-3 text-center font-semibold'>Arbitrum Orbit is mainnet-ready! Learn more about launching a customized chain <a href="/" className='underline dark:text-black text-white'>here</a>.</p>
                </div>
            )}
            {/* this is fixed on scroll down */}
            <div className='w-full px-5 py-5 flex justify-between items-center gap-2 dark:bg-white bg-black z-50 ' 
              style={{ position: hideOnScroll ? 'fixed shadow-xl' : 'fixed', top: hideOnScroll ? 0 : 'auto' }}>
                <div className='flex items-center gap-1.5'>
                    <a href="/" className='dark:hidden flex items-center hover:opacity-60 dark:hover:opacity-80'><img src={DarkLogo} alt="Logo" className='mr-1' /></a>
                    <a href="/" className='dark:flex hidden items-center hover:opacity-60 dark:hover:opacity-80'><img src={WhiteLogo} alt="Logo" className='mr-1' /></a>
                    <div className='lg:flex gap-1 hidden'>
                        <button className='bg-gray-dark text-white dark:bg-stone-white dark:text-black dark:hover:text-white dark:hover:bg-black px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 hover:text-black hover:bg-white transition duration-300'><FaRegCircle className='h-2.5 w-2.5 hover:bg-arbitrum-one-blue hover:text-arbitrum-one-blue dark:hover:text-white dark:hover:bg-white rounded-full' />Products</button>
                        <button className='bg-gray-dark text-white dark:bg-stone-white dark:text-black dark:hover:text-white dark:hover:bg-black hover:text-black hover:bg-white px-3 py-2 text-sm font-medium rounded-md transition duration-300'>Portal</button>
                        <button className='bg-gray-dark text-white dark:bg-stone-white dark:text-black dark:hover:text-white dark:hover:bg-black hover:text-black hover:bg-white px-3 py-2 text-sm font-medium rounded-md transition duration-300'>Bridge</button>
                        <button className='bg-gray-dark text-white dark:bg-stone-white dark:text-black dark:hover:text-white dark:hover:bg-black hover:text-black hover:bg-white px-3 py-2 text-sm font-medium rounded-md transition duration-300'>Community</button>
                        <button className='bg-gray-dark text-white dark:bg-stone-white dark:text-black dark:hover:text-white dark:hover:bg-black px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 hover:text-black hover:bg-white transition duration-300'><FaRegCircle className='h-2.5 w-2.5 hover:bg-arbitrum-one-blue hover:text-arbitrum-one-blue dark:hover:text-white dark:hover:bg-white rounded-full' />Resources</button>
                    </div>
                </div>
                <div className='lg:flex hidden items-center gap-6 '>
                    <button onClick={toggleTheme} className='flex items-center justify-between text-xl border dark:border-black border-border_color rounded-xl w-[50px] h-[21px] p-0.5'>
                        <IoMdMoon onClick={toggleTheme} className='dark:text-white text-border_color w-4 h-4' />
                        <RiSunFill onClick={toggleTheme} className='dark:text-black text-black w-4 h-4' />
                    </button>
                    <a target="_blank" href="/" class="hover:opacity-75 dark:text-black text-white"><FaTwitter /></a>
                    <a target="_blank" href="/" class="hover:opacity-75 dark:text-black text-white"><FaDiscord /></a>
                    <button class="min-w-[80px] rounded p-2 text-sm leading-none backdrop-blur hover:opacity-75 bg-white text-black dark:bg-black dark:text-white dark:hover:text-white dark:hover:bg-black hover:text-black hover:bg-white ">Arbitrum Docs</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar




