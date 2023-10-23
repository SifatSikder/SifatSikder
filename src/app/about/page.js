import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Animation from '@/components/Animation'
import AnimatedTable from '@/components/Table'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import ProfilePic from '../../../public/images/self/sifat-2.jpg'
const about = () => {
    return (
        <>
            <Head>
                <title>Sifat Sikder | About Me</title>
                <meta name='Sifat Sikder' content='Software Enginerring Enthusiast & An Undergraduate Student from Dhaka University' />
            </Head>

            <main className='w-full flex flex-col items-center justify-center '>
                <Layout className=' px-8 pt-12'>
                    <Animation text=" 👋 Hello, I&apos;m Sifat Sikder, a passionate software engineering undergraduate from university of Dhaka currently in my third year of studies. I'm on a journey to explore the limitless possibilities of technology." className='!text-2xl' />


                    <div className='w-full grid grid-cols-9 gap-8 pt-24'>
                        <div className='col-span-3 flex flex-col items-center justify-start '>
                            <h2 className='mb-4 text-lg font-extrabold uppercase text-dark/75'>Biography</h2>
                            <p className='font-semibold text-justify'>
                                🚀 As a budding software engineer, I&apos;m dedicated to the art of problem-solving through elegant and efficient code. I thrive on challenges and am on a continuous quest to refine my skills and expand my knowledge.
                            </p>
                            <p className='font-semibold text-justify my-3'>
                                🌟 I&apos;m a firm believer in teamwork and collaboration, and I&apos;m confident that I can bring value to any project or team I&apos;m a part of.
                            </p>
                            <p className='font-semibold text-justify my-3'>
                                📚 Currently, I&apos;m honing my skills in nextjs and machine learning basics, always striving for excellence. When I&apos;m not coding, you&apos;ll often find me reading & experimenting with new projects.
                            </p>
                            <p className='font-semibold text-justify'>
                                📧 If you&apos;d like to connect, collaborate, or just have a chat about all things tech, feel free to reach out to me at &quot;bsse1221@iit.du.ac.bd&quot;. I&apos;m always eager to make new connections in the tech world.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={ProfilePic} alt='Profile Picture of Sifat Sikder' className='w-full h-[60vh] rounded-2xl' priority sizes='{max-width:768px} 100vw,{max-width:1200px} 50vw,50vw' />
                        </div>

                        <div className='col-span-3'>
                            <div className='flex flex-col items-center '>
                                <h2 className='mb-4 text-lg font-extrabold uppercase text-dark/75'>Education & Academics</h2>
                                <AnimatedTable />
                            </div>
                        </div>

                    </div>

                    <Skills />
                    <Experience />
                </Layout>
            </main>
        </>
    )
}

export default about

