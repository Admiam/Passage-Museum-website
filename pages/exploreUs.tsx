import React from 'react'
import Image from 'next/image'
import Sirius from '../components/explorePage/sirius'
import Neva from '../components/explorePage/neva'
import Railway from '../components/explorePage/railway'

const ExplorePage = () => {
  return (   
      <div className="bg-b snap-x flex snap-mandatory h-screen w-screen overflow-scroll">
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Sirius />
        </div>
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Neva />
        </div>
        <div className="snap-center flex-shrink-0 h-screen w-screen flex items-center">
          <Railway />
        </div>
      </div>
  )
}
export default ExplorePage