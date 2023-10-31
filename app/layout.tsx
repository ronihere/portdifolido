import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContext from '@/components/context/ActiveSectionContext'
import {Toaster} from "react-hot-toast"
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Roni-Dev',
  description: 'Developer portfolio of Roni Mondal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} overflow-x-hidden pt-28 sm:pt-36 bg-gray-100 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <ActiveSectionContext>
        <Header/>
          {children}
          <Footer/>
          <Toaster position="top-right"/>
        </ActiveSectionContext>
      </body>

    </html>
  )
}
