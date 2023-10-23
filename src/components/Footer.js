import React from 'react'
import Layout from './Layout'

const Footer = () => {
    return (
        <footer className='w-full h-[5vh] mt-2 border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-5 flex items-center justify-center lg:max-xl:flex-col lg:max-xl:py-3 xs:max-sm:!py-6 '>
                <span className='xs:max-sm:!text-center'> Created By Sifat Sikder &copy; {new Date().getFullYear()}  All Rights Reserved</span>
            </Layout>
        </footer>
    )
}
export default Footer