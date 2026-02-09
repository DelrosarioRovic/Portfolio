import React from 'react'
import digeco from "../../../image/digeco.jpg";
import upwork from "../../../image/upwork-icon.png";
import outsourze from "../../../image/Outsourze Logo Mark.svg";
import { AnimatedLetters, useAnimatedLetters } from '../../animation/AnimatedLetter'

const Experience = () => {
   const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } = useAnimatedLetters();
   const work = ["W", "o", "r", "k"];

   const workExp = [{
    icon: digeco,
    companyName: "DIGECO",
    startDate: "08-15-2023",
    endDate: "07-15-2025",
    position: "Web developer / Frontend developer",
    description: "Worked as a Junior Frontend Developer in an Agile environment, contributing to the development of responsive web applications and company websites. Built reusable UI components using React.js and modern frontend technologies to ensure scalability and maintainability. Collaborated closely with UI/UX designers and backend developers to deliver visually appealing and functional interfaces. Integrated REST APIs and Socket.IO to enable real-time data communication and seamless user experiences. Gained hands-on experience with clean architecture, performance optimization, and professional team workflows."
   }, {
    icon: upwork,
    companyName: "FREELANCE (Upwork)",
    startDate: "01-15-2025",
    endDate: "present",
    position: "Frontend developer",
    description: "Worked as a freelance Frontend and Fullstack Developer, delivering responsive and user-friendly web applications for various clients through Upwork and independent projects. Developed modern interfaces using HTML, CSS, JavaScript, React.js, and related tools. Handled fullstack development tasks using Node.js, Express, and SQL databases such as MySQL and PostgreSQL. Focused on performance, accessibility, scalability, and clean, maintainable code while meeting client requirements and deadlines."
   }, {
    icon: outsourze,
    companyName: "OUTSOURZE",
    startDate: "07-15-2025",
    endDate: "present",
    position: "Fullstack / Frontend developer",
    description: "Developed and deployed responsive landing pages and websites using Next.js and Tailwind CSS, ensuring high performance and SEO optimization. Fully built multiple landing pages from scratch and optimized them using Google Lighthouse standards. Configured and managed VPS servers on Hostinger for website deployment and maintenance. Set up and organized GitHub repositories for version control and collaborative development. Worked closely with designers and project managers to implement UI/UX designs accurately and deliver projects efficiently."
   }]

  return (
    <div id='experience' className='max-w-7xl h-full mx-auto py-20 px-8 relative'>
        <div data-aos="fade-right" className="mb-10">
          <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={work}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
        </div>
        <div className='flex flex-col '>
            {workExp.map((experience, index) => (
                <div key={index} className='flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md'>
                    <div className='flex justify-between items-center text-white'>
                        <div className='flex items-center gap-2 my-3'>
                            <img src={experience.icon} alt="" width={40} className='rounded-full' />
                            <p className='text-xl'>{experience.companyName}</p>
                        </div>
                        <p className='text-sm opacity-50'>{experience.startDate} - {experience.endDate}</p>
                    </div>
                    <div>
                        <p className='text-sm text-white opacity-50'>{experience.position}</p>
                    </div>
                    <div className='py-5'>
                        <p className='text-white text-sm'>{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience