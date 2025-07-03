import Image from 'next/image'
import React from 'react';
import mnetlogo from "../../public/images/mnet-icon.jpg"
import ibmlogo from "../../public/images/ibmlogo.png"
import Pills from './Pills/Pills';
import { JOB_DETAILS } from '@/const';


function Experience() {
    const currentJob = JOB_DETAILS[0]
    return (
        <div className=' py-4 md:py-3 px-4 md:px-6 max-w-[980px] mx-auto'>
            <h2 className='font-poppins font-semibold text-xl md:text-3xl text-white flex items-center mb-6 md:mb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                <span className='ml-2'>Experience</span>
            </h2>
            <div>
                <div className="flex gap-x-3">
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                            <Image className="flex-shrink-0 size-7 rounded-full" src={ibmlogo} alt="IBM Logo" />
                        </div>
                    </div>
                    <div className="grow pt-0.5  mb-8">
                        <h3 className="gap-x-1.5 font-semibold">
                            <span className='text-[#FFEA9F] text-xl md:text-2xl'>{currentJob.companyName}</span><br/>
                            <span className='text-[#FFBBC3] text-sm'>{currentJob.start} - {currentJob.end}</span>
                        </h3>
                        <div className="mt-1 text-sm text-white">
                            <ul className='list-disc pl-[18px] mb-3 text-sm md:text-lg'>
                                <li className='mb-2 last-of-type:mb-0'>
                                    Working on a customer-centric web application for a leading NBFC, enabling end-to-end vehicle loan application and management, using <span className='font-bold'>React 18, Redux, Redux Saga, Sass, and Material UI.</span>
                                </li>
                                <li className='mb-2 last-of-type:mb-0'>
                                    Responsible for <span className='font-bold'>building the Vehicle Loan module</span> from scratch within a BFF architecture integrated with Capella Couchbase backend services.
                                </li>
                                <li className='mb-2 last-of-type:mb-0'>
                                    Integrated third-party services for document and bank statement analysis, implementing frontend polling to monitor processing status and efficiently handle results.
                                </li>
                                <li className='mb-2 last-of-type:mb-0'>Developed a custom developer plugin to decrypt encrypted API payloads from network logs, enhancing debugging efficiency and maintaining secure data handling.</li>
                            </ul>
                            <div>
                                <h4 className='text-sm mb-3 font-bold'>Technologies Used</h4>
                                <div className='flex items-center flex-wrap gap-3 text-xs md:text-sm'>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>JavaScript</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>React</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>Redux</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>Redux Saga</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>Material UI</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>Tailwind CSS</span>
                                    </Pills>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                        <div className="relative z-10 size-7 flex justify-center items-center">
                            <Image className="flex-shrink-0 size-7 rounded-full" src={mnetlogo} alt="Image Description" />
                        </div>
                    </div>
                    <div className="grow pt-0.5">
                        <h3 className="gap-x-1.5 font-semibold">
                            <span className='text-[#FFEA9F] text-xl md:text-2xl'>{JOB_DETAILS[1].companyName}</span><br/>
                            <span className='text-[#FFBBC3] text-sm'>{JOB_DETAILS[1].start} - {JOB_DETAILS[1].end}</span>
                        </h3>
                        <div className="mt-1 text-sm text-white">
                            <ul className='list-disc pl-[18px] mb-3 text-sm md:text-lg'>
                                <li className='mb-2 last-of-type:mb-0'>
                                    Crafted web applications leveraging <span className='font-bold'>React, Tailwind CSS, Axios and React Hook Form</span>. Engineered server-driven UI components for Web Forms, this accelerated the development process, resulting in 50% faster feature releases.
                                </li>
                                <li className='mb-2 last-of-type:mb-0'>
                                    Created a bespoke JSON Files Editor as a WordPress Plugin, enabling business developers to seamlessly execute CRUD operations on JSON files hosted on the server directly from the WordPress Admin Panel. Implemented necessary role checks to ensure restricted access to the Admin Panel. This innovative plugin effectively <span className='font-bold'>eradicated the manual task of developers by 99% </span>for updating static JSON files on the server.
                                </li>
                                <li className='mb-2 last-of-type:mb-0'>
                                    I played a significant role in crafting WordPress themes for one of most popular blogging site of US which has monthly traffic of ~25 million users. This encompassed developing bespoke short codes, advanced custom fields, and reusable UI elements like accordions, modals, and forms, utilizing a skillet spanning HTML, CSS, JavaScript, Vue.js, jQuery, Tailwind CSS. Additionally, optimized the site for enhanced SEO performance, achieving remarkable improvements of up to <span className='font-bold'>99%</span> in web core vital scores
                                </li>
                                <li className='mb-2 last-of-type:mb-0'> Managed and enhanced corporate websites, overseeing all maintenance and development activities. </li>
                            </ul>
                            <div>
                                <h4 className='text-sm mb-3 font-bold'>Technologies Used</h4>
                                <div className='flex items-center flex-wrap gap-3 text-xs md:text-sm'>
                                    <Pills className={'py-1 px-2 md:px-3 md:py-2'}>
                                        <span>HTML</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>CSS</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>JavaScript</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>React</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>Next.js</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>WordPress</span>
                                    </Pills>
                                    <Pills  className={'py-1 px-2'}>
                                        <span>PHP</span>
                                    </Pills>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience