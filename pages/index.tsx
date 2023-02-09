import Head from 'next/head'
import Image from 'next/image'
import { Inter, Manrope } from '@next/font/google'
import Herky from '../public/mascot-removebg.png'
import React from 'react'
import Blob from '../public/blob.svg'
import EmailIcon from '../public/email-icon.svg'
import LockIcon from '../public/lock-icon.svg'
import GradIcon from '../public/college-icon.svg'
import {TaskBar, Footer} from '@/components/taskbar'

const inter = Inter({ subsets: ['latin'] }) 
const manrope = Manrope({ subsets: ['latin'] }) 

export default function Home() {
  return (
    <>
      <Head>
        <title>CSUSChat</title>
        <meta name="description" content="Connect with fellow Sacramento State University students and share experiences, advice, and resources. Join our exclusive community for Sac State students today."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className} `}>
        <TaskBar/>

        <div className={` min-h-screen min-w-full flex flex-col justify-start items-center text-center`}>
          <div className={`min-h-3/5 p-6 mt-1`}>
            <div className={` ${inter.className}text-center flex-col flex gap-4 items-center w-full my-4 `}>
              <h2 className='font-medium text-4xl w-1/2' >Connect with old friends and make new ones, exclusively for CSUS students.</h2>
            </div>
            {/* picture of herky and some extra information */}

            <div className="flex flex-row justify-center items-center py-10 flex-wrap" >
              {/* herky */}
              <div className="flex ">
                <Image src={Herky} className="bg-blob bg-no-repeat bg-contain"  objectFit='contain' alt="csus school mascot herky posing in football field"  />
              </div>

              
              {/* information */}
              <div className={`flex flex-col justify-start align-baseline items-center  min-w-fit  w-fit px-10 py-8 gap-8`}>
                {/* email only tab */}
                
                <div className=" align-baseline flex flex-row w-[50rem]">
                  <Image className=' self-center mr-8' alt="email icon svg" src={EmailIcon} width={60}/>
                  <div className='flex flex-col text-start gap-0.5 w-2/3'>
                    <h1 className="font-semibold text-lg">Only Students</h1>
                    <p>To ensure a community of peers, registration is limited to students with @csus.edu email addresses.</p>
                  </div>
                </div>

                {/* secure tab */}
                <div className=" align-baseline flex flex-row  w-[50rem]  ">
                  <Image className=' self-center mr-8' alt="email icon svg" src={LockIcon} width={60}/>
                  <div className='flex flex-col text-start gap-0.5 w-2/3'>
                    <h1 className="font-semibold text-lg">Secure</h1>
                    <p>Our website leverages the power and security of Amazon Web Services and is built on an open-source platform to guarantee transparency and secure operations.</p>
                  </div>
                </div>

                <div className=" align-baseline flex flex-row w-[50rem] ">
                  <Image className=' self-center mr-8' alt="email icon svg" src={GradIcon} width={60}/>
                  <div className='flex flex-col text-start gap-0.5 w-2/3'>
                    <h1 className="font-semibold text-lg">Student-Driven</h1>
                    <p>This project was developed by students and utilizes the Next.js framework. We welcome constructive feedback to continuously improve and enhance the user experience.</p>
                  </div>
                </div>

                <h2 className="text-lg mt-8 font-semibold p-2 w-[40rem] text-start">
                  Our website is designed to provide a fast and seamless experience with the integration of real-time web sockets for live chatting. The security of our platform is ensured by utilizing Amazon Web Services. The responsive design is achieved through the use of the Next.js framework.
                </h2>

                <button className="w-fit h-fit self-end bg-blue-500 px-4 py-1 rounded-sm mr-32 font-semibold shadow-md">
                  REGISTER
                </button>
                

              </div>

            </div>





          </div>

        </div>
      </main>
      <Footer/>
    </>
  )
}
