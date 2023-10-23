'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Animation from '@/components/Animation'
import Layout from '@/components/Layout'
import gomuko from '../../../public/images/projects/gomuko.jpg'
import wumpus from '../../../public/images/projects/wumpus.jpg'
import portfolio from '../../../public/images/projects/portfolio.png'
import linkedin from '../../../public/images/projects/linkedin.png'
import a2f from '../../../public/images/projects/a2f.jpg'
import codewhisperer from '../../../public/images/projects/codewhisperer.webp'
import dtgenerator from '../../../public/images/projects/dtgenerator.jpg'

import { motion } from 'framer-motion'


const FramerImage = motion(Image);

const Project = ({ type, title, summary, image, weblink, githubLink, technology, className }) => {
    return (
        <article className='relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 mb-12'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark' />
            <Link href={weblink} target='_blank' className='w-1/2 cursor-pointer border border-solid border-dark overflow-hidden rounded-lg '>
                <FramerImage src={image} alt={title} className={`${className} w-full h-auto`} priority sizes='{max-width:768px} 100vw,{max-width:1200px} 50vw,50vw' whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={weblink} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                    <h3 className='my-2 w-full text-left text-xl font-semibold'>Technology Used: {technology}</h3>
                </Link>
                <p className='my-2 font-semibold text-dark text-justify'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    {/* <Link href={githubLink} target='_blank' className='w-10'><GithubIcon /> </Link> */}
                    <Link href={weblink} target='_blank' className=' rounded-lg bg-dark text-light p-2 px-6 text-lg font-medium'>Visit Project</Link>

                </div>
            </div>
        </article>
    )
}


const Projects = () => {
    return (
        <>
            <Head>
                <title>Sifat Sikder | Projects</title>
                <meta name='Sifat Sikder' content='Projects I have done so far' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <Animation text="Discover accomplishments that define my journey in the world of projects" className='!text-2xl mb-16 text-center' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>

                            <Project type='AI-Projects'
                                title='Code-Whisperer(Ongoing)'
                                image={codewhisperer}
                                summary={`This project takes voice speech as inputs and generate programming lines as output.It enables a user to code using just her voice commands. Using codewhisperer one can just express in natural language what one wish to do and that will be automatically written, as code, in the code editor.
                                `}
                                weblink='https://github.com/SifatSikder/CodeWhisperer-AI-Project'
                                githubLink='https://github.com/SifatSikder/CodeWhisperer-AI-Project'
                                technology='Python,OpenAI'
                            />


                            <Project type='Testing-Projects'
                                title='Decision-Table-Generator(Ongoing)'
                                image={dtgenerator}
                                summary={`This project takes a story and generates decision table and subsequently test cases from it.The user is required to provide the story in simple if-else sentences. The software will then generate a set of condition stubs and action stubs. After that, using these condition stubs and action stubs, it will generate rules and subsequently a decision table. Finally, the software will generate test cases based on the decision table.
                                `}
                                weblink='https://github.com/AbirAhmed72/Decision-Table-Generator'
                                githubLink='https://github.com/AbirAhmed72/Decision-Table-Generator'
                                technology='Python'
                            />

                            <Project type='Android-Projects'
                                title='A2F(Access To Fund)'
                                image={a2f}
                                summary={`A2F is a community based lending application using crowdfunding concept. It is
                                    a mobile application where funds will be available anywhere and anytime.Students take short-term loans for mostly academic and medical purposes. They suffer from availability of
                                    funds when it is really needed.
                                    The application A2F aims to solve this problem for accessing funds.The
                                    mission of A2F is to provide short term loans within a specified community and
                                    also raise funds for that community welfare.
                                    `}
                                weblink='https://github.com/SifatSikder/A2F'
                                githubLink='https://github.com/SifatSikder/A2F'
                                technology='Flutter,ExpresJS'

                            />


                            <Project type='Distributed-System-Projects'
                                title='Mini LinkedIn'
                                image={linkedin}
                                summary={`This projects starts by building a monolithic web based miniature application of linkedin. Then,it breaks down the system into microservices following the microservice architecture.Then It containerizes each service using Docker.After that, it orchestrates the services by writing a docker-compose file.Then it uses an nginx container so that all traffic is routed through nginx and delivered to the respective services.
                                `}
                                weblink='https://github.com/SifatSikder/CSE601-Distributed-System/tree/main/Linkdin-Distributed'
                                githubLink='https://github.com/SifatSikder/CSE601-Distributed-System/tree/main/Linkdin-Distributed'
                                technology='Docker, Nginx, Minio'
                            />

                            <Project type='Web-Projects'
                                title='Personal Portfolio'
                                image={portfolio}
                                summary={`This project reflects not only my passion for web development but also my commitment to presenting my skills, experiences, and achievements in an engaging and dynamic way.My portfolio website is not just a digital resume; it's a reflection of who I am as a professional and a testament to my continuous growth and development.`}
                                weblink='https://github.com/SifatSikder/Portfolio-website'
                                githubLink='https://github.com/SifatSikder/Portfolio-website'
                                technology='NextJS'
                            />


                            <Project type='AI-Projects'
                                title='Wumpus-AI'
                                image={wumpus}
                                summary='My second AI project is a Wumpus World Solver, a classic problem in the field of artificial intelligence. This project showcases my expertise in AI algorithms, knowledge representation, and reasoning. I designed an AI agent capable of navigating a complex maze-like environment, avoiding pits and a dangerous Wumpus creature, while seeking out the hidden gold.'
                                weblink='https://github.com/SifatSikder/Gomuko-AI-Project-1'
                                githubLink='https://github.com/SifatSikder/Wumpus-AI-Project'
                                technology='ExpressJS,AngularJS'
                            />

                            <Project type='AI-Projects'
                                title='Gomuko-AI'
                                image={gomuko}
                                summary='My inaugural AI project is a classic strategy board game also known as Five in a Row.I designed and implemented an AI player capable of making intelligent moves and providing a challenging gaming experience using minmax and alpha beta pruning algorithm. Through this project, I honed my skills in AI algorithms, decision-making and game logic.'
                                weblink='https://github.com/SifatSikder/Gomuko-AI-Project-1'
                                githubLink='https://github.com/SifatSikder/Gomuko-AI-Project-1'
                                technology='ExpressJS,AngularJS'
                            />


                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects


