import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Neva = () => {
  return (
    <div className="flex flex-row text-w mb-16">
      <div className="w-1/2 mr-8">
        <Image src="/neva.png" alt="Sirius Replica" width={657} height={449} className="rounded-lg" />
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-cookie xl:text-9xl lg:text-7xl">The Neva</h1>
          <div className="xl:w-48 lg:w-12">
            <Image src="/nevaBones2.png" alt="Death" width={100} height={91} layout="fixed" />
          </div>
        </div>
        <p className="font-sans text-xl font-normal mt-2">Neva was a three-masted barque launched in 1813. She was used to transporting convicts to Australia. During her second voyage carrying convicts she wrecked in Bass Strait on 13 May 1835. It was one of the worst shipwrecks in Australian history, 224 lives were lost here.</p>
        <Link className="" href="/#location">
            <button className=" font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit">
                Visit us
            </button>
        </Link>
      </div>
    </div>
  )
}
export default Neva