'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const navbar = useRef(null);

    useEffect(() => {
        if (!navOpen) return;
        function handleClick(event) {
            if (navbar.current && !navbar.current.contains(event.target)) {
                setNavOpen(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    },[navOpen])

    return (
        <header className='bg-primary'>
            <div className='header-container font-poppins flex items-center justify-between py-4 md:py-5 px-4 md:px-6 border-b-[0.5px] border-b-slate-50/40'>
                <Link href="/">
                    <span title='Jai Soneji' className="site-initials text-accent font-poppins text-2xl ">JS</span>
                </Link>
                <div className='navbar-container block relative'>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setNavOpen(!navOpen)
                    }} className='text-accent block md:hidden'>
                        {
                            !navOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        }
                    </button>
                    <div ref={navbar} className={`absolute md:static md:flex right-0 top-[55px] w-[145px] md:w-full rounded-lg shadow-md bg-zinc-800 transition-all ease-cubic-bezier-cubic-bezier-0-1-0-1  duration-400 md:translate-x-0 ${navOpen ? "translate-x-0 " : "translate-x-[10000px]"}`}>
                        <nav className=' rounded-lg shadow-md'>
                            <ul className='md:flex md:flex-shrink-0 md:w-full gap-2'>
                                <li className="p-4 cursor-pointer text-slate-50">Home</li>
                                <li className="p-4 cursor-pointer text-slate-50">
                                    <Link href="#projects-section">
                                        Projects
                                    </Link>
                                </li>
                                <li className="p-4 cursor-pointer text-slate-50">
                                    <a download="Jai Prem Soneji - Resume.pdf" href="/resume/Jai Prem Soneji - Resume.pdf">
                                        CV
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header