import React from 'react'
import digeco from "../../../image/digeco.jpg";
import { AnimatedLetters, useAnimatedLetters } from '../../animation/AnimatedLetter'

const Experience = () => {
   const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } = useAnimatedLetters();
   const work = ["W", "o", "r", "k"];
   const workExp = [{
    icon: digeco,
    companyName: "Digeco",
    startDate: "08-15-2023",
    endDate: "present",
    position: "Web developer / Frontend dev",
    description: "I began my career at this company last year as a front-end web developer. Digeco is a startup company where we develop a variety of products, including outsourced and in-house applications, web apps, mobile apps, websites, and more. During my tenure here, I've expanded my skills significantly. I've gained proficiency in WordPress and enhanced my abilities in React.js, along with several other tools. Additionally, I've learned how to integrate and fully utilize AI for advanced user experiences. Overall, my time here has allowed me to improve both my development skills and my ability to collaborate effectively within a team."
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
                            <img src={digeco} alt="" width={40} className='rounded-full' />
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