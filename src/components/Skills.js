'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y, className }) => {
    return (
        <motion.div className={`${className} flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute cursor-pointer`} whileHover={{ scale: 1.1 }} initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }} transition={{ duration: 2 }} >
            {name}
        </motion.div>
    )

}


const Skills = () => {
    return (
        <>
            <h2 className='w-full text-center text-8xl font-bold mt-64'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer`} whileHover={{ scale: 1.1 }}>
                    Skillset
                </motion.div>

                <Skill name='C' x='-14vw' y='0vw' className='!bg-C' />
                <Skill name='C++' x='14vw' y='0vw' className='!bg-CPP' />
                <Skill name='Java' x='0vw' y='-7vw' className='!bg-Java' />
                <Skill name='Python' x='0vw' y='7vw' className='!bg-Python' />

                <Skill name='Dart' x='13vw' y='-9vw' className='!bg-Dart' />
                <Skill name='Flutter' x='-13vw' y='-9vw' className='!bg-Flutter' />
                <Skill name='Javascript' x='13vw' y='9vw' className='!bg-Javascript' />
                <Skill name='PHP' x='-13vw' y='9vw' className='!bg-PHP' />


                <Skill name='AngularJS' x='0vw' y='-15vw' className='!bg-AngularJS' />
                <Skill name='ReactJS' x='0vw' y='15vw' className='!bg-ReactJS' />
                <Skill name='NodeJS' x='29vw' y='0vw' className='!bg-NodeJS' />
                <Skill name='ExpressJS' x='-29vw' y='0vw' />
                <Skill name='FastAPI' x='-28vw' y='-12vw' className='!bg-FastAPI' />
                <Skill name='NextJS' x='28vw' y='-12vw' />


                <Skill name='tailwindcss' x='28vw' y='12vw' className='!bg-tailwind' />
                <Skill name='MongoDB' x='-28vw' y='12vw' className='!bg-MongoDB' />
                <Skill name='Docker' x='0vw' y='-22vw' className='!bg-Docker' />
                <Skill name='Jest' x='-43vw' y='-4vw' className='!bg-Jest' />
                <Skill name='Selenium' x='-18vw' y='-20vw' className='!bg-Selenium' />

                <Skill name='Nginx' x='43vw' y='-4vw' className='!bg-nginx' />
                <Skill name='Typescript' x='18vw' y='-20vw' className='!bg-typescript' />
                <Skill name='Framer' x='-14vw' y='20vw' className='!bg-framer' />
                <Skill name='Git' x='14vw' y='20vw' className='!bg-git' />

            </div>
        </>

    )
}

export default Skills