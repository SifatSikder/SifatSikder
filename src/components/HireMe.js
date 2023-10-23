import React from 'react'
import { CircularText } from '@/components/Icons'
import Link from 'next/link'
const HireMe = () => {
    return (
        <div className='fixed left-8 bottom-56 flex items-center justify-center 
        md:max-lg:right-8 md:max-lg:left-auto md:max-lg:top-6 md:max-lg:bottom-auto md:max-lg:absolute
        xs:max-sm:top-5
        
        
        '>
            <div className='w-48 h-auto flex items-center justify-center relative md:max-lg:w-24'>

                <Link href='mailto:bsse1221@iit.du.ac.bd' target={"_blank"}
                    className='animate-bounce flex items-center justify-center absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark 
                    md:max-lg:w-16 md:max-lg:h-16 md:max-lg:text-[16px] 
                    '>Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMe