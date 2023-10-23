'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import ListCircle from './ListCircle'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='mx-auto my-8 first:mt-0 last:mb-0 w-[70%] flex flex-col items-start justify-between '>
        <ListCircle refer={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }} >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <div className='inline text-primary capitalize'>@{company}</div> </h3>
            <span className='capitalize font-medium text-dark/75 '>
                {time} | {address}
            </span>
            <p className='font-semibold w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}


const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] });
    return (
        <>
            {/* Experience */}
            <div className='my-64'>
                <h2 className='font-bold text-8xl text-center mb-32 w-full '>Experiences</h2>
                <div ref={ref} className=' w-[75%] mx-auto relative'>

                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 h-full w-[4px] bg-dark origin-top' />

                    <ul className='w-full ml-4 flex flex-col items-start justify-between'>
                        <Details
                            position='Assistant Analyst'
                            company=' DSSE'
                            companyLink=''
                            time='June 2023-September 2023'
                            address='University of Dhaka'
                            work={`Worked as an assistant analyst on the automation project for the University of Chittagong under the supervision of Dr. Kazi Muhyemin-Us-Sakib. As an assistant analyst, my primary responsibilities revolved around contacting various stakeholders to gather comprehensive information pertaining to their respective departments. Subsequently, after those conversations, I created simple diagrams (use case & activity diagrams) to show how the new system should work, making sure it matched what each department wanted.`}

                        />
                        <Details
                            position='Participant & Winner'
                            company='IEEE BUP BRANCHFEST 2023'
                            companyLink=''
                            time='July 17-July 18'
                            address='Bangladesh University of Professionals(BUP)'
                            work={`Another remarkable experience.It was an opportunity to showcase my skills and knowledge in a competitive environment.There I secured the 2nd runner-up position in the project showcasing segment for A2F(Access to Fund) project`}
                        />

                        <Details
                            position='Participant & Winner'
                            company='AURORA: National Science Festival 2023'
                            companyLink=''
                            time='May 24-May 26'
                            address='Rajshahi University of Engineering & Technology(RUET)'
                            work={`A remarkable and gratifying experience. The event provided a platform for showcasing innovative and scientific projects.There I secured the 1st runner-up position in the project showcasing competition for A2F(Access to Fund) project`}

                        />

                        <Details
                            position='Participant'
                            company='DUET TECHFEST 2023'
                            companyLink=''
                            time='July 14,2023'
                            address='Dhaka University of Engineering and Technology(DUET)'
                            work={`I had the privilege of participating in the prestigious DUET TECHFEST, where I had the opportunity to showcase my skills, interact with fellow enthusiasts, and learn from some of the brightest minds in the field. Participating in such competitive events has strengthened my determination to excel in my endeavors, and I look forward to using this experience as a stepping stone towards future success.`}
                        />

                        <Details
                            position='Participant'
                            company='MindSparks23 Project Showcasing'
                            companyLink=''
                            time='July 30,2023'
                            address='Ahsanullah University of Science and Technology(AUST)'
                            work={`Participated in the CSE fest organized by AUST, a competitive computer science event, to challenge myself and learn from the best minds in the field. Although I did not win a prize, I gained valuable experience in teamwork, problem-solving, and communication.`}
                        />


                    </ul>

                </div>
            </div>

            {/* Education */}
            <div className='my-64'>
                <h2 className='font-bold text-8xl text-center mb-32 w-full '>Education</h2>
                <div ref={ref} className=' w-[75%] mx-auto relative'>

                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 h-full w-[4px] bg-dark origin-top' />

                    <ul className='w-full ml-4 flex flex-col items-start justify-between '>
                        <Details
                            position='Bachelor of Science in Software Engineering'
                            company=' IIT'
                            companyLink=''
                            time='January 2020-December 2024'
                            address='University of Dhaka'
                            work={`CGPA:3.85 upto 5th semester`}
                        />

                        <Details
                            position='HSC'
                            company=' Dhaka College'
                            companyLink=''
                            time='June 2017-May 2019'
                            address='New Market, Dhaka-1205'
                            work={`GPA:5.00`}
                        />

                        <Details
                            position='SSC'
                            company=' A.K High School'
                            companyLink=''
                            time='January 2015-March 2017'
                            address='South Dhonia, Dhaka-1236'
                            work={`GPA:5.00. Got TalentPool Scholarship`}
                        />

                    </ul>

                </div>
            </div>
        </>






    )
}

export default Experience