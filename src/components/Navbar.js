'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname, useRouter } from 'next/navigation'
import { GithubIcon, LinkedInIcon, TwitterIcon, RedditIcon, DockerIcon, RightArrow } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {

    const pathname = usePathname()


    return (

        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link >
    )
}

const CustomPhoneLink = ({ href, title, className = "", toggle }) => {

    const pathname = usePathname()
    const router = useRouter()
    const handleClick = () => { toggle(); router.push(href); }
    return (

        <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button >
    )
}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => { setIsOpen(!isOpen) }

    return (
        <header className='w-full h-[10vh] px-8 py-4 font-semibold flex items-center justify-between relative'>

            <button className='flex flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark  block h-0.5 w-6 transition-all duration-300 ease-out  rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                <span className={`bg-dark  block h-0.5 w-6 transition-all duration-300 ease-out  rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`bg-dark  block h-0.5 w-6 transition-all duration-300 ease-out  rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className=' w-2/3 flex items-center justify-between'>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink href='/about' title='About Me' className='mx-4' />
                    <CustomLink href='/projects' title='Projects' className='mx-4' />
                    <CustomLink href='/achievements' title='Achievements' className='mx-4' />
                    <div className='flex'>
                        <span>Handles</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <RightArrow />
                    </div>

                </nav>

                {/* <div className='absolute left-[57%] top-2 translate-x-[-50%]'><Logo /></div> */}

                <nav className=' w-1/3 flex items-center justify-center flex-wrap '>

                    <motion.a href='https://www.linkedin.com/in/sifatsikder1221/' target={"_blank"} whileHover={{ y: -5 }}
                        whileTap={{ scale: 1.5 }} className='w-6 mr-6'> <LinkedInIcon />  </motion.a>


                    <motion.a href='https://github.com/SifatSikder' target={"_blank"} whileHover={{ y: -5 }}
                        whileTap={{ scale: 1.5 }} className='w-6 mx-6'> <GithubIcon />  </motion.a>

                    <motion.a href='https://hub.docker.com/u/sifat1221' target={"_blank"} whileHover={{ y: -5 }}
                        whileTap={{ scale: 1.5 }} className='w-6 mx-6'> <DockerIcon />  </motion.a>

                    <motion.a href='https://twitter.com/SifatSikder1221' target={"_blank"} whileHover={{ y: -5 }}
                        whileTap={{ scale: 1.5 }} className='w-6 mx-6'> <TwitterIcon />  </motion.a>

                    <motion.a href='https://www.reddit.com/user/Old-Hat1559' target={"_blank"} whileHover={{ y: -5 }}
                        whileTap={{ scale: 1.5 }} className='w-6 ml-6'> <RedditIcon />  </motion.a>


                </nav>

            </div>

            {
                isOpen ?
                    <motion.div className='min-w-[70vw]  flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32' initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }}>

                        <nav className=' flex flex-col items-center justify-center'>
                            <CustomPhoneLink href='/' title='Home' toggle={handleClick} />
                            <CustomPhoneLink href='/about' title='About Me' toggle={handleClick} />
                            <CustomPhoneLink href='/projects' title='Projects' toggle={handleClick} />
                            <CustomPhoneLink href='/achievements' title='Achievements' toggle={handleClick} />
                        </nav>

                        {/* <div className='absolute left-[57%] top-2 translate-x-[-50%]'><Logo /></div> */}

                        <nav className=' flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href='https://www.linkedin.com/in/sifatsikder1221/' target={"_blank"} whileHover={{ y: -5 }}
                                whileTap={{ scale: 1.5 }} className='w-6 mr-6 sm:mx-2'> <LinkedInIcon />  </motion.a>
                            <motion.a href='https://github.com/SifatSikder' target={"_blank"} whileHover={{ y: -5 }}
                                whileTap={{ scale: 1.5 }} className='w-6 mx-6 sm:mx-2 bg-white'> <GithubIcon />  </motion.a>
                            <motion.a href='https://hub.docker.com/u/sifat1221' target={"_blank"} whileHover={{ y: -5 }}
                                whileTap={{ scale: 1.5 }} className='w-6 mx-6 sm:mx-2'> <DockerIcon />  </motion.a>
                            <motion.a href='https://twitter.com/SifatSikder1221' target={"_blank"} whileHover={{ y: -5 }}
                                whileTap={{ scale: 1.5 }} className='w-6 mx-6 sm:mx-2 bg-white '> <TwitterIcon />  </motion.a>
                            <motion.a href='https://www.reddit.com/user/Old-Hat1559' target={"_blank"} whileHover={{ y: -5 }}
                                whileTap={{ scale: 1.5 }} className='w-6 ml-6 sm:mx-2'> <RedditIcon />  </motion.a>
                        </nav>

                    </motion.div>
                    : null
            }



        </header>
    )
}

export default Navbar