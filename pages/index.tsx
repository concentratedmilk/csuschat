import Head from 'next/head'
import Image from 'next/image'
import { Inter, Roboto_Mono } from '@next/font/google'
import Herky from '../public/mascot-removebg.png'


const inter = Inter({ subsets: ['latin'] }) 
const robot = Roboto_Mono( { subsets: ['cyrillic'],  weight: '400'},)

export default function Home() {
  return (
    <>
      <Head>
        <title>CSUSChat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${inter.className} `}>
        <div className='self-center p-4 text-center'>
          <h1 className={` ${robot.className} font-light text-4xl text-slate-600`}><span className='text-green-500'>csus</span>chat.com</h1>
        </div>
        <div className={` flex flex-row min-w-full gap-2 bg-slate-100 justify-evenly p-1.5 font-bold`}>
          <a href="">about</a>
          <a href="">github</a>
          <a href="">register</a>
        </div>
        <div className={` min-h-screen min-w-full flex flex-col justify-start items-center text-center`}>
          <div className={`min-h-3/5 p-6 `}>
            <div className={` ${inter.className}text-center flex-col flex gap-4 items-center w-full `}>
              <h2 className='font-medium text-4xl w-1/2' >Connect with old friends and make new ones, exclusively for CSUS students.</h2>
            </div>
            {/* picture of herky and some extra information */}
            <div className="flex flex-row justify-center">
              {/* herky */}
              <Image src={Herky} alt="csus school mascot herky posing in football field"/>
              {/* information */}
              <div>

              </div>

            </div>





          </div>

        </div>
      </main>
    </>
  )
}
