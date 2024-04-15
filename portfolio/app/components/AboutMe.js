'use client'
import Link from 'next/link'
import React from 'react';
import Pills from './Pills/Pills';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function AboutMe() {
  return (
    <div className='bg-primary h-screen'>
        <RoughNotationGroup show={true}>
            <div className='pt-[64px] max-w-[1280px] mx-auto px-4 pb-3 md:max-w-[920px] md:pt-[120px]'>
                <Image
                    src="/images/profile.png"
                    width={100}
                    height={100}
                    alt="Jai Soneji"
                    className='mb-4 '
                />
                <div className="flex mb-1">
                    <h1 className='text-3xl font-bold font-poppins  text-white'>
                        Hey, I am Jai Soneji 
                        <Image
                            src="/images/wave.png"
                            width={40}
                            height={40}
                            className='inline ml-1'
                            alt="Hello"
                        />
                    </h1>
                </div>
                <h2 className='text-gray-400 mb-4 md:mb-5 text-lg font-kalam'>UI Developer <Link href="https://media.net">
                    <span className='text-white ml-1'>
                        <RoughNotation type="highlight" color={'rgba(24,150,255,0.76)'} padding={'2px'} strokeWidth={2} animationDuration={1000} order="1">
                            @media.net
                        </RoughNotation>
                    </span>
                </Link></h2>
                <div className='text-white text-sm md:text-xl font-poppins tracking-wide text-left mb-4 md:mb-5 leading-6'>
                    <p className='mb-2 md:mb-3.5'>
                        I am a passionate frontend developer with a creative flair and a knack for crafting captivating digital experiences.
                    </p>
                    <p className='mb-2 md:mb-3.5'>
                        Over the past <span className='text-[#FFBBC3] mx-1 font-kalam'>
                        <RoughNotation type="box" color={'#FFBBC3'} padding={'8px'} strokeWidth={2} animationDuration={1000} order="2">
                            {Number(new Date().getFullYear()) - Number(2021)} years
                        </RoughNotation>
                        </span>, I've had the privilege of honing my skills and making meaningful contributions as a valued member of the talented team at media.net.
                    </p>
                    
                    <p>
                        Throughout my journey, I've navigated a diverse landscape of technologies, from the foundational trio of HTML, CSS, and JavaScript to the dynamic worlds of Vue.js and React.js. Along the way, I've also delved into the realms of PHP and WordPress, expanding my toolkit to meet the ever-evolving demands of the digital realm. And trust me, there's always more to explore.
                    </p>
                    
                </div>
                <div className='flex items-center gap-3 flex-wrap'>
                    <Pills>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <rect width="15" height="15" fill="url(#pattern0_29_26)"/>
                        <defs>
                        <pattern id="pattern0_29_26" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_29_26" transform="scale(0.0111111)"/>
                        </pattern>
                        <image id="image0_29_26" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtUlEQVR4nO3cu2sUURiG8eMlRgTBS7zG2AgBsVdQK8FCrLVQxMJCBKP/gXZeQARRwVqMIGongoKtFxCMhdhpJVgEJG4U748MGWFZdmbO7mY+z5nz/iDd7sfuk+Gb3UkY50RERERERERExAFLgdPAC2CW5poFngOngGHTXz2wCXhNeqay9255JKcYuT12/Ud2vi5SN2EROtvJqXtmEbr1v99lAFoWoQVQaCMKbUShjSh04qGngbPALmArsA+4CfwiUiGGfgmsK5i1J9aPi6GF/gSsr5h3mAiFFvq8x7wFwFsiE1rovZ4zrxOZ0ELv8Jx5jsiEFvqQ58y7RCa00A885q0GPhOZ0EJnDlacCG8ToRBDf8//WLC4Y85a4A6RCjH0Px+AW8DVbKUAX4lYyKEbRaGNKPScb8B74A3wEfhNAqEvAhdKfm4UPO9RxfOudTx+BricfUkChjpe80JgM3AEeExDQy+qmLel4HknKp63oe2x2UfEkR7ew27gHQNwdQsw9Jk+38eafLUotKsOfb+fyG0zxoEvOqJLAMuAVW5AwBWFNgCMAT+1ow30829uyZwMC64C7geO5n/8XeE89XM93KUWGhgCLuVfUtpll16Pec44oNAV8shF/gA7PWZsV+gSwCjwoyLSPY85GxW6BHDcI9C0x5zlCl2iy/WOIis99nxPXN1COhkCk56vYcxjVk9X+FzdCCv0Q8/XMO4xq6f/A3R1I6zQTzxfwzaPWQpdRKF1RA9Oq2POPKRUaB8K3Z1OhuhTh3Z0Ga2O7rQ60OrQ6iij1dGdVgdaHVodsa2ORlJoIwptRKGNKLQRhW5Q6CjvrzHPZixC6waD2NxgMLvrbOpOWoQezm+EmqpXwJLaQ7fd1ngq0cijJpE7juyJbF81/ATZAp5m68LsSBYRERERERERcWH7Cy+jOyOAOZZ/AAAAAElFTkSuQmCC"/>
                        </defs>
                        </svg>
                        <Link target="_blank" className='text-[10px] md:text-sm text-white' href="https://www.linkedin.com/in/jai-soneji/">
                            <span>LinkedIn</span>
                        </Link>
                    </Pills>
                    <Pills>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <rect width="15" height="15" fill="url(#pattern0_29_23)"/>
                        <defs>
                        <pattern id="pattern0_29_23" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_29_23" transform="scale(0.0111111)"/>
                        </pattern>
                        <image id="image0_29_23" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                        </svg>
                        <Link target="_blank" className='text-[10px] md:text-sm text-white' href="https://github.com/jaisoneji/">
                            <span>GitHub</span>
                        </Link>
                    </Pills>
                    <Pills>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="14" viewBox="0 0 16 14" fill="none">
                            <rect width="16" height="14" fill="url(#pattern0_29_17)"/>
                            <defs>
                            <pattern id="pattern0_29_17" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_29_17" transform="matrix(0.00972222 0 0 0.0111111 0.0625 0)"/>
                            </pattern>
                            <image id="image0_29_17" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO3avWsUQRzG8VODCCJoFAxYxMLGRhBFsNJGq1jZ+dJYamfjHxCLFBYWFgqCglpZaaWNVoJoY2OjYgIWgkJACRolyVcGNiAhuZndnZn9zd7zgcDB3e5kH/Z2Z57bwUBEREREREREREREREQiAnYCrxCft8CetmFvB557hxpdL4Edsc7srcDjro/IoKfAtiaBbhry3hbgXtdHZsh9YKxJlu7NB76NgRtdH6EBt4DNnpPy7rCgg74OwDVG10zoZdYXdNAFHrgMLDM6VoCrdSYOIUEHTVmAc8Bf+m8JuOTJYtfaqXBo0M57YJ9ngCngF/21CJz1ZDABvFu7YZ2gnVnggGegE8AP+mcBOOU59v3Ax/U2rhu08xU45BnwCPCd/pgHjnuO+SDwZaMdNAk6ysAFCTmxjvpOrKZBr36VTgd8lT5QrtmAS+XJkEtlm6CdPwE3h73r3RwKEHLzPwP8DtlZ26BDpzulNX9vAqaz5+tMZ2MEXWcC/wz7QhZoV+ou0GIFXXtJalSyyiF20MElC/YkLdFSBJ38n04g+cmRKuiSmr+ZHJe7lEFbb/5W6jZwloO22vwtNWngrAdtrflbbNrAlRC0leZvoU0DV0rQXTd/810WYbmD7uqAozRwpQUd2vxNRmr+Psdq4EoMOlfzF7WBKzXo1M1f9Aau5KBTNX8vUjRwpQcdeyn8xOLS31LQzs2AZ/7usLHb7jOeMsuNwagH7X1g8L8bmOsgvlV/7vWUZ5uxat+dsBh080dgDf/gYDXoaA91W3l43nLQzmtgvEXI49U+Omc9aGcOONYg5MPAJ4woIWiqldt0yNkN7Aau51jt9THoVT+Bh8AFVxJVvfFE9foi8Kj6jDmlBV0sBZ2Jgs5EQWeioDNR0Jko6EwUdCYKOhMFnYmCzkRBZ6KgM1HQmSjoTHw9uoiIiIiIiIiIiIiIiAyG+Ae+eiaBOoDMBQAAAABJRU5ErkJggg=="/>
                            </defs>
                        </svg>
                        <Link className='text-[10px] md:text-sm text-white' href="mailto:jai.soneji@gmail.com">
                            <span>jai.soneji@gmail.com</span>
                        </Link>
                    </Pills>
                    <Pills>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <rect width="14" height="15" fill="url(#pattern0_29_20)"/>
                        <defs>
                        <pattern id="pattern0_29_20" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_29_20" transform="matrix(0.0111111 0 0 0.0103704 0 0.0333333)"/>
                        </pattern>
                        <image id="image0_29_20" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHElEQVR4nO2dP2sUQRiHR1AjsdKk0IsgqIVlUqkImiKVn8GPcNHO9SOYQlS0FrRSBO1s/FMmisLFwkI/gWIVk+ZQ75GFLe4g7M3M7r4zN/M+kO7u/WUehtm7d+Z2jVEURVEURZkZgCPATeAjsMfsswd8AG4AcyYGgFPAF9JluxxjDDM5ZcnjssPN7Gq5yIX1kKLLNTkXtkKK3iUfdkOKzgqjomVQ0ULMuujXwHXgDHC0+rsCvCcyZlX0DnCtpvYB4CkRIWt3UoYvf4DLFvUPAueBJ0SAjNX9Rfhy1yPrOYHpxqLd4H34B5z2yDoLjAhINxbtBu/DoEHegIC0a89t4D48bpD3jIC0a89t4D7caZB3j4C0a89t4D5sNMjbICDt2nMbuA8vGuQF/eTRrj23gfvwCzjkkVV+pv5JQLqxaDd4H76WOzOeuznle4PRjUW7wfvwsEHeI4ecIXAL6NXU6wFF9drkRL9pkPfWIadwqFukKPovsOaRtVa915aeQ+1eiqKphC045BxzlOwqesmmoAkFzeg75PQ96rssHbdtCppQ0IwfwKJFxmL1WleG1dqb7cVwnPLiNl9Tfx54RyTI2p0U0QarNfWvEhGydidFtMFqTX0V3aLoizWiLxARJhQt/O9b5SbslA3aaI6dydqdFOHLCHgJHLfIWABehd7GKpGxur8EV0aVtBWPrBVH4dn2Or7VrccOmZeA7xZ5WfY6PpVfo1vMLb+Sf56SmV2v43d5VKCD7HNTjg1nJ/p+h/kPanKz63Usd5i/XJOrvY5ZpasJYzOjssKoaBlUtBAqWggVLYSKFkJFC6GihYhd9HBauzIUqbVJCxM5qbRJT5rIAU6kILpnIieVI2GFiZxU2qTDaUezQpHaxTAZVLQQKloIFS2EihZCRQsRu+ih9jpkRBcmcrTXIYT2OoTQXocQ2uvoGO11RErIGZEVRkXLoKKFUNFCqOgMROd06/mdkKKj+VVr6g9TKJ+8kwv9kKLnqofBpM4AOBxM9NgjnLYTl7xkYqCa2evV3QpSuEDuApvVvZzCzmRFURRFURTjwn/aX/SaFGQg0AAAAABJRU5ErkJggg=="/>
                        </defs>
                        </svg>
                        <a className='text-[10px] md:text-sm text-white' download="Jai Prem Soneji - Resume.pdf" href="/resume/Jai Prem Soneji - Resume.pdf">
                            <span>CV</span>
                        </a>
                    </Pills>
                </div>
            </div>
        </RoughNotationGroup>
        
    </div>
  )
}
