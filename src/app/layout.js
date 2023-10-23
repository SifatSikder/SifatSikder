import { Lora } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const lora = Lora({ weight: '400', subsets: ['latin'], variable: '--font-lora', })

export const metadata = {
  title: 'Portfolio',
  description: 'Coding My Story: A Pixelated Portrait of my Digital Odyssey 🎨',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <Head>
        <meta name='viewport' content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <body className={`${lora.variable} font-lora bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
