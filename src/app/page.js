import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Animation from '@/components/Animation'
import HireMe from '@/components/HireMe'
import { LinkArrow, ContactIcon } from '@/components/Icons'
import ProfilePicture from "../../public/images/self/sifat-1.png"



export default function Home() {
  return (
    <>
      <main className='flex items-start text-dark w-full h-[81vh] mt-1'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div className='flex items-center justify-between w-full  lg:items-start lg:py-2'>

            {/* profilepic */}
            <div className='w-1/3 lg:w-1/3'>
              <Image src={ProfilePicture} alt="Profile Picture of Sifat Sikder" className='w-2/3 m-auto h-auto lg:!inline-block  lg:m-14 sm:!ml-8 sm:!mt-0 ' priority sizes='{max-width:768px} 100vw,{max-width:1200px} 50vw,50vw' />
            </div>

            {/* header+intro paragraph+resume */}
            <div className='w-2/3 flex flex-col items-center self-start mt-12 lg:mt-0 lg:!w-2/3'>

              {/* header */}
              <Animation text='Welcome to the realm of Sifat Sikder.A software engineering enthusiast on a mission to turn code into creativity.' className='!text-3xl !text-justify xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-lg lg:!hidden' />



              <Animation text='Welcome to the realm of Sifat Sikder' className='hidden !text-4xl !text-justify xl:max-2xl:!text-4xl lg:!text-center lg:!inline-block lg:max-xl:!text-4xl  md:max-lg:!text-3xl sm:max-md:!text-xl xs:max-sm:!text-sm  sm:!m-auto sm:!pr-2' />

              {/* intro paragraph */}
              <p className='my-4 text-justify font-semibold mr-12 sm:!hidden '>
                I am a software engineer who thrives on the challenge of crafting elegant, performant solutions. Take a tour of the diverse range of projects that demonstrate my skills and experience in a variety of areas. From web development to machine learning, I am always eager to learn and grow, and I am confident that I can make a valuable contribution to any team.
              </p>


              <p className='hidden my-4 px-4 text-justify font-semibold sm:!inline-block sm:!pr-12  sm:!m-auto xs:max-sm:!text-xs xs:max-sm:!ml-1 xs:max-sm:!text-justify'>
                I am a software engineer who thrives on the challenge of crafting elegant and performant solutions. Take a tour of the diverse range of my projects. From web development to machine learning, I am always eager to learn and grow, and I am confident that I can make a valuable contribution to any team.
              </p>

              {/* resume */}
              <div className='flex items-center self-center mt-0 lg:mt-8 sm:!mt-4 sm:!pr-12'>
                <Link href='/documents/resume.pdf' target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-medium hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:max-lg:p-2 md:max-lg:px-4 md:max-lg:text-base' download={true}> Resume <LinkArrow className='w-6 ml-1' /></Link>
                <Link href='mailto:bsse1221@iit.du.ac.bd' target={"_blank"} className='ml-4 flex items-center  bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-medium hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  md:max-lg:text-base xs:max-sm:!px-4'> Contact
                  <ContactIcon className='w-6 ml-2 bg-light ' /></Link>
              </div>

            </div>

          </div>

        </Layout>

        <HireMe />

      </main>
    </>
  )
}
