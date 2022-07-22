import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Neva = () => {
  return (
    <div className="flex md:flex-row mn:flex-col text-w mb-16">
      <div className="md:w-1/2 mn:w-full mr-8">
        <Image src="/neva.png" alt="Sirius Replica" width={657} height={449} className="rounded-lg" />
      </div>
      <div className="flex flex-col md:w-1/2 mn:w-full">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-cookie xl:text-8xl lg:text-7xl md:text-5xl mn:text-5xl">The Neva</h1>
          <div className="">
            <Image src="/nevaBones2.png" alt="Death" width={100} height={91} layout="fixed" />
          </div>
        </div>
        <p className="font-sans xl:text-xl sm:text-base mn:text-sm font-normal mt-2">Neva was a three-masted barque launched in 1813. She was used to transporting convicts to Australia. During her second voyage carrying convicts she wrecked in Bass Strait on 13 May 1835. It was one of the worst shipwrecks in Australian history, 224 lives were lost here.</p>
        <Link className="" href="/#location">
            <button className=" font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit mt-2">
                Visit us
            </button>
        </Link>
      </div>
    </div>
  )
}
export default Neva