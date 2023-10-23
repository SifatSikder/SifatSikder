'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Animation from '@/components/Animation'
import Layout from '@/components/Layout'
import ImageCarousel from '@/components/ImageCarousel'



const ruetImages = [
    '/images/achievements/ruet/ruet-1.png',
    '/images/achievements/ruet/ruet-2.jpeg',
    '/images/achievements/ruet/ruet-3.jpeg',
    '/images/achievements/ruet/ruet-4.jpeg',
];

const bupImages = [
    '/images/achievements/bup/bup-1.jpeg',
    '/images/achievements/bup/bup-2.jpeg',
    '/images/achievements/bup/bup-3.jpeg',
    '/images/achievements/bup/bup-4.jpeg',
];

const Achievement = ({ images, title, time, summary }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark' />
            <div className='  w-full  inline-block overflow-hidden rounded-lg'>
                {/* <FramerImage src={images} alt={title} className='w-full h-auto' whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} /> */}
                <ImageCarousel images={images} />
            </div>
            <div>
                <h2 className='capitalize text-2xl font-bold my-2 text-primary'>{title}</h2>
                <p className='text-sm font-semibold text-justify mb-2'>{summary}</p>
                <span className='font-semibold'>{time}</span>
            </div>
        </li>
    )
}


const Achievements = () => {
    return (
        <>
            <Head>
                <title>Sifat Sikder | Achievements</title>
                <meta name='Sifat Sikder' content='Achievements I have gained so far' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <Animation text='Welcome to my world of accomplishments, where hard work and determination meet success!' className='!text-3xl mb-16 !text-center' />
                    <ul className='grid grid-cols-2 gap-16'>
                        <Achievement images={ruetImages} title='1st RUNNER UP' time='MAY-2023' summary='AURORA: National Science Festival 2023 @ RUET' />
                        <Achievement images={bupImages} title='2nd RUNNER UP' time='JULY-2023' summary='IEEE BUP BRANCHFEST 2023 @ BUP' />
                    </ul>
                </Layout>
            </main>
        </>

    )
}

export default Achievements