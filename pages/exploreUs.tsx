import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Sirius from '../components/explorePage/sirius'
import Neva from '../components/explorePage/neva'
import Railway from '../components/explorePage/railway'
import Submarine from '../components/explorePage/submarine'
import Footer from '../components/footer'
import Link from 'next/link'


const ExplorePage = () => {
  return ( 
    <div className="bg-b">  
      <Head>
        <title>Explore us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore our museum"/>
        <meta name="og:title" content="Explore us - Passage West Maritime Museum"/>
      </Head>
      <div className="h-screen">
        <div className="flex flex-row justify-between fixed w-screen z-50 bg-b">
            <Link href="/">
              <div className="text-w text-6xl w-fit cursor-pointer hover:text-b rounded-md p-1 ml-5 hover:bg-w">
                &larr;
              </div>
            </Link>
            <div className="w-10 flex items-center mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#fff" d="M27.13 9h16.69a1 1 0 0 0 0-2H27.13V5.53L22.82 8l4.31 2.5zm6 4.53L28.82 16l4.31 2.5V17h16.69a1 1 0 0 0 0-2H33.13zM51.18 45a3.87 3.87 0 0 0 0-3.49l-5.57-9.65a4.18 4.18 0 0 0-5.1-1.86l-9 3.06-6-9.53a6.93 6.93 0 0 0-.11-6.76 7 7 0 0 0-4.25-3.26 6.92 6.92 0 0 0-5.32.7 7 7 0 0 0 3.31 13.06L26.44 41l-4.71 1.12c-3.35.79-5.09 3.75-5.06 7a2.6 2.6 0 0 0 3.26 2.42 13.39 13.39 0 0 1 8.92.46 11.29 11.29 0 0 1 4.79 4.74 3.4 3.4 0 0 0 3 1.7 3.36 3.36 0 0 0 1.64-.44l11.61-6.7a3.68 3.68 0 0 0 1.72-2.3 3.34 3.34 0 0 0-.36-2.57 1.55 1.55 0 0 1-.07-1.43zM14.94 22.77a5 5 0 1 1 9.19-1.34l-1.66-2.61a3.48 3.48 0 0 0-6 3.5l1.46 2.75a5 5 0 0 1-2.99-2.3zm34.74 25.78a1.71 1.71 0 0 1-.79 1l-11.61 6.7A1.82 1.82 0 0 1 35 55.16c-3.25-5.49-9.67-7.14-15.61-5.52-.56.15-.73-.5-.75-.91-.26-5.12 6-5.24 9.5-6.07a1 1 0 0 0 .65-1.44L18.21 21.38a1.49 1.49 0 0 1 2.57-1.5l9.42 14.91a1 1 0 0 0 1.16.41l9.82-3.32a2.19 2.19 0 0 1 2.66 1l5.57 9.65a1.76 1.76 0 0 1 0 1.6 3.53 3.53 0 0 0 .15 3.42 1.39 1.39 0 0 1 .12 1z" data-name="Layer 2"/></svg>
            </div>
        </div>
        <div className="snap-x flex snap-mandatory w-full overflow-x-auto">
          <div className="snap-center flex-shrink-0 h-fit w-9/12 rounded-lg flex mt-32 ml-40">
            <Sirius />
          </div>
          <div className="snap-center flex-shrink-0 w-9/12 h-fit rounded-lg flex mt-32 mx-20">
            <Neva />
          </div>
          <div className="snap-center flex-shrink-0 w-9/12 h-fit rounded-lg flex mt-32 mx-20">
            <Railway />
          </div>
          <div className="snap-center flex-shrink-0 w-9/12 h-fit rounded-lg flex mt-28 mx-20 pb-5">
            <Submarine />
          </div>
        </div>
      </div>
      <div className="text-w flex flex-col xl:px-24 md:px-36 sm:px-16 justify-between md:pt-36 mn:pt-72 mn:px-2">
        <Footer />
      </div>
    </div>
  )
}
export default ExplorePage