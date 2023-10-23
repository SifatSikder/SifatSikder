'use client'
import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial: { opacity: 1, },
    animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } }
}

const singleWord = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, } }
}

const Animation = ({ text, className = "" }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-justify overflow-hidden sm:py-0'>
            <motion.h1 className={`${className} w-full text-dark inline-block font-bold capitalize text-8xl`}
                variants={quote}
                initial="initial"
                animate="animate"
            >

                {
                    text.split(" ").map((word, index) => {
                        return <motion.span key={word + '-' + index} className='inline-block mb-2'
                            variants={singleWord}

                        >{word}&nbsp;</motion.span>
                    })
                }
            </motion.h1>
        </div>
    )
}

export default Animation