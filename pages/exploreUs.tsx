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
    <div className="bg-b pt-5">  
      <Head>
        <title>Explore us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore our museum"/>
        <meta name="og:title" content="Explore us - Passage West Maritime Museum"/>
      </Head>
      <div className="h-screen">
        <Link href="/">
          <div className="text-w text-6xl ml-5 w-fit cursor-pointer hover:text-b rounded-md p-1 hover:bg-w">
            &larr;
          </div>
        </Link>
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
      <div className="px-24">
        <Footer />
      </div>
    </div>
  )
}
export default ExplorePage