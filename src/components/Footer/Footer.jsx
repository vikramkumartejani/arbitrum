import React from 'react'
import Logo from '../../assets/logo-white.svg'
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='w-full max-w-1440 m-auto flex justify-between py-16 px-6'>
            <div className='flex justify-between flex-col '>
                <img src={Logo} alt="Logo" className='h-[25px] w-[100px] lg:h-[32px] lg:w-[125px]' loading="lazy" />
                <p class=" border-b border-dashed py-[3px] font-mono text-xs leading-none text-white/60">The Most Decentralized L2 Technology</p>
            </div>
            <div className='w-[55%]'>
                <div className="grid gap-y-10 lg:grid-cols-6 text-xs font-medium w-full">
                    <div className="grid grid-flow-row grid-cols-footer grid-rows-2 gap-x-6 gap-y-10 lg:col-start-1 lg:col-end-4 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-8">
                        <div class="grid gap-2">
                            <a href="/rollup">Arbitrum Rollup</a>
                            <a href="/anytrust">Arbitrum AnyTrust</a><a href="/orbit">Arbitrum Orbit</a>
                            <a href="/stylus">Arbitrum Stylus</a></div><div class="grid gap-2">
                            <a target="_blank" rel="noopener noreferrer" href="/">Ecosystem Job Board</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Arbitrum Foundation</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Governance Docs</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">YouTube</a></div><div class="grid gap-2">
                            <a target="_blank" rel="noopener noreferrer" href="/">Portal</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Bridge</a>
                            <a href="/community">Community</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Careers</a>
                        </div>
                        <div class="grid gap-2">
                            <a target="_blank" rel="noopener noreferrer" href="/">Bug Bounties</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Media Kit</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Research Forum</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Blog</a>
                        </div>
                    </div>
                    <div className="grid  text gap-6 lg:col-start-5 lg:col-end-7 lg:grid-cols-none lg:grid-rows-2 lg:gap-8">
                        <div className="grid gap-2">
                            <a target="_blank" rel="noopener noreferrer" href="/">Contact Partnerships</a>
                            <a target="_blank" rel="noopener noreferrer" href="/">Support</a>
                            <a href="/privacy">Privacy Policy</a><a href="/">Terms of Service</a>
                        </div>
                    </div>
                   <div className='flex justify-between items-center w-full'>
                   <div class="flex gap-6 text-white/60 lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:items-center">
                        <span>© 2024</span><span>All Rights Reserved.</span>
                    </div>
                    <div className=" flex items-center gap-4 lg:col-start-5 lg:col-end-7 lg:row-start-2" >
                        <a target="_blank" href="/" class="hover:opacity-75"><FaTwitter /></a>
                        <a target="_blank" href="/" class="hover:opacity-75"><FaDiscord /></a>
                    </div>
                   </div>
                </div>
            </div>
        </div>

    )
}

export default Footer