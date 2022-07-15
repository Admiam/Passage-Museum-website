import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Submarine = () => {
  return (
    <div className="flex flex-row text-w">
      <div className="w-1/2 mr-8">
        <Image src="/submarine.png" alt="Sirius Replica" width={600} height={379} className="rounded-lg" />
      </div>
      <div className="flex flex-col w-1/2 justify-between">
          <h1 className="font-cookie text-5xl">US Submarine Chasers at the Granary Base</h1>
        <p className="font-sans text-xl font-normal mt-2">During world war one, the technology for underwater detection was in its infancy. The US and Canadian- built, 80 foot Motor Launches were of a limited success, but it was the coming together of radio telephony, and directional hydrophones, as well as depth charge technology that brought about a new innovative craft. This was called the Subchaser. Thirty subchasers, under the command of Captain Hepburn arrived in Queenstown, Cork, Ireland, on the 21st of August 1918.   They were directed up the River Lee, past Monkstown, and arrived at their moorings opposite Passage West. This was called Queenstown base, and offices were provided in the Passage granary. These buildings were built in the late 1800s.</p>
        <Link className="" href="/#location">
            <button className="mt-2 font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit">
                Visit us
            </button>
        </Link>
      </div>
    </div>
  )
}
export default Submarine