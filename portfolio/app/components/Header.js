'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header>
            <div className='header-container flex items-center justify-between py-4 px-4 border-b border-b-slate-50'>
                <Link href="/">
                    <span title='Jai Soneji' className="site-initials text-slate-200 font-roboto text-2xl ">JS</span>
                </Link>
                <div className='navbar-container block md:hidden relative'>
                    {
                        !navOpen ? <button className='text-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                        </button> : <></>
                    }
                    {
                        navOpen && 
                        <div className='absolute'>
                            <nav>
                                <ul>
                                    <li>Home</li>
                                    <li>About me</li>
                                    <li>Projects</li>
                                    <li>Blogs</li>
                                    <li>Resume</li>
                                </ul>
                            </nav>
                        </div>
                    }
                </div>
            </div>
            
        </header>
    )
}

export default Header