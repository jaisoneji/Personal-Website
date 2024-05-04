import React from 'react'
import Pills from './Pills/Pills';
import parse from 'html-react-parser';
import Link from 'next/link';

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: 'Vue-salisation - A Covid19 Dashboard',
            description: "Designed and developed an interactive <b>dashboard</b> displaying real-time COVID-19 statistics across India. The dashboard features dynamic graphs for visualizing COVID-19 data and an interactive map of India highlighting statistics for each state. Deployed on Netlify",
            link: 'https://vue-salisation.netlify.app',
            languages: [
                {
                    id: 1,
                    title: 'vue.js'
                },
                {
                    id: 2,
                    title: 'TailwindCSS'
                },
                {
                    id: 3,
                    title: 'amCharts'
                },
                {
                    id: 4,
                    title: 'Netlify'
                },
            ]
        },
        {
            id: 2,
            title: 'Eklavya: An automated quiz generation app',
            description: `Designed and developed a web app that enables teachers and professors to generate and host quizzes for students. 
            <ul className='list-disc pl-5 mt-3'>
                <li className='mb-2'>Quizes can be generated by providing and image of questions and answers and our OCR can detect the same and convert it to editable Form like Google Forms.</li> 
                <li className='mb-2'>Teachers can host quizzes and view real-time video feeds of students currently participating in the quiz. We implemented this feature using <b>GraphQL</b>.</li> 
                <li className='mb-2'>We added proctoring feature to detect if quiz participants are looking away from screen too often use <b>TensorFlow pose detection</b></li> 
            </ul>`,
            link: 'https://eklavya-client.netlify.app/',
            languages: [
                {
                    id: 1,
                    title: 'vue.js'
                },
                {
                    id: 2,
                    title: 'TailwindCSS'
                },
                {
                    id: 3,
                    title: 'Node.js'
                },
                {
                    id: 4,
                    title: 'GraphQL'
                },
                {
                    id: 5,
                    title: 'Tensorflow'
                },
            ]
        },
        {
            id: 3,
            title: 'Handsfree.io',
            description: "Designed and developed an interactive <b>dashboard</b> displaying real-time COVID-19 statistics across India. The dashboard features dynamic graphs for visualizing COVID-19 data and an interactive map of India highlighting statistics for each state. Deployed on Netlify",
            link: 'https://vue-salisation.netlify.app',
            languages: [
                {
                    id: 1,
                    title: 'vue.js'
                },
                {
                    id: 2,
                    title: 'TailwindCSS'
                },
                {
                    id: 3,
                    title: 'amCharts'
                },
                {
                    id: 4,
                    title: 'Netlify'
                },
            ]
        },
    ]
  return (
    <div className='max-w-[1280px] mx-auto px-4 md:max-w-[980px]'>
        <h2 className='font-poppins font-semibold text-xl md:text-3xl text-white flex items-center mb-6 md:mb-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            <span className='ml-2'>Projects</span>
        </h2>
        <div className='projects-list-container'>
            {
                projectsData.map((project) => (
                    <div className='project-item mb-12 last-of-type:mb-0' key={project.id}>
                        <h3 className='font-semibold font-poppins  mb-3 md:mb-4 text-[#FFEA9F] leading-normal text-base md:text-2xl'>
                            <Link className='flex gap-2 items-center' href={project.link} target='_blank'>
                                {project.title}
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                            </Link>
                        </h3>
                        <div className='text-sm md:text-lg text-white font-poppins mb-3 md:mb-4'>
                            {parse(project.description)}
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                project.languages.map(language => (
                                    <Pills  className={'py-1 px-2 md:px-3 md:py-2'} key={language.id}>
                                        <span className='text-xs md:text-sm md:text-lg text-white font-semibold'>{language.title}</span>
                                    </Pills>
                                ))
                            }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects