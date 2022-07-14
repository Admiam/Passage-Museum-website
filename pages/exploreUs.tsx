import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Sirius from '../components/explorePage/sirius'
import Neva from '../components/explorePage/neva'
import Railway from '../components/explorePage/railway'
import Submarine from '../components/explorePage/submarine'


const ExplorePage = () => {
  return ( 
    <div className="bg-b">  
      <Head>
        <title>Explore us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Explore our museum"/>
        <meta name="og:title" content="Explore us - Passage West Maritime Museum"/>
      </Head>
      <div className="snap-x flex snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Sirius />
        </div>
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Neva />
        </div>
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Railway />
        </div>
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Submarine />
        </div>
      </div>
    </div>
  )
}
export default ExplorePage