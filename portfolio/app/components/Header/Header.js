'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';
import './Header.scss'

function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [windowSize, setWindowWidth] = useState(0)
    const navbar = useRef(null);
    const header= useRef(null)

    useEffect(() => {
        
        if (!navOpen) return;
        function handleClick(event) {
            if (event.target.closest('.menu-items') || (navbar.current && !navbar.current.contains(event.target))) {
                setNavOpen(false);
            }
        }
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    },[navOpen])


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])

    useEffect(() => {
        const isSticky = (e) => {
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.current.classList.add('is-sticky') : header.current.classList.remove('is-sticky');
        };
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const jumpToSection = (e) => {
        let path = e.target.getAttribute('data-href');
        let offset = header.current.clientHeight + 5
        let ele = document.querySelector(path)
        window.scrollTo({
            top: ele.offsetTop - offset,
            behavior: 'smooth'
        }) 
    }

    return (
        <header ref={header} className={`header-wrap bg-primary border-b-[0.5px] border-b-slate-50/40 absolute top-0 left-0 right-0`}>
            <div className='header-container  font-poppins flex items-center justify-between py-3 md:py-3 px-4 md:px-6 max-w-[980px] mx-auto'>
                <Link href="/">
                    <span title='Jai Soneji' className="site-initials text-accent font-kalam text-2xl ">Jai Soneji</span>
                </Link>
                <div className='navbar-container block relative'>
                    <button onClick={(e) => {
                        e.stopPropagation();
                        setNavOpen(!navOpen)
                    }} className='text-accent block md:hidden'>
                        {
                            !navOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide hamburger lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        }
                    </button>
                    <div ref={navbar} className={`absolute md:static md:flex right-0 top-[55px] w-[145px] md:w-full rounded-lg shadow-md bg-zinc-800 transition-all ease-cubic-bezier-cubic-bezier-0-1-0-1 duration-400 ${(navOpen || windowSize > 768) ? "visible " : "invisible"}`}>
                        <nav className=' rounded-lg shadow-md md:overflow-hidden'>
                            <ul className='md:flex md:flex-shrink-0 md:w-full gap-2'>
                                <li className="menu-items p-4 cursor-pointer text-slate-50 md:hover:bg-zinc-700 transition-colors">
                                    <div onClick={jumpToSection} data-href="#projects-section">
                                        Projects
                                    </div>
                                </li>
                                <li className="menu-items p-4 cursor-pointer text-slate-50 md:hover:bg-zinc-700 transition-colors">
                                    <div onClick={jumpToSection} data-href="#experience-section">
                                        Experience
                                    </div>
                                </li>
                                <li className="menu-items p-4 cursor-pointer text-slate-50 md:hover:bg-zinc-700 transition-colors">
                                    <div onClick={jumpToSection} data-href="#skills-section">
                                        Skills
                                    </div>
                                </li>
                                <li className="menu-items p-4 cursor-pointer text-slate-50 md:hover:bg-zinc-700 transition-colors">
                                    <a download="Jai Soneji - Resume.pdf" href="/resume/jai_soneji_resume.pdf">
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