import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

const title = 'Explore Passage West Maritime Museum'
const url = 'https://www.admiam.com/exploreUs'

const Submarine = () => {
  return (
    <div className="flex md:flex-row mn:flex-col text-w">
      <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        images: [
          {
            url: 'https://www.admiam.com/submarine.png',
            width: 600,
            height: 379,
            alt: 'US Submarine Chasers at the Granary Base',
          },
        ],
      }}
    />
      <div className="md:w-1/2 mn:w-full mr-8">
        <Image src="/submarine.png" alt="US Submarine Chasers at the Granary Base" width={600} height={379} className="rounded-lg" />
      </div>
      <div className="flex flex-col md:w-1/2 mn:w-full justify-between">
          <h1 className="font-cookie xl:text-5xl mn:text-2xl">US Submarine Chasers at the Granary Base</h1>
        <p className="font-sans xl:text-xl sm:text-base mn:text-sm font-normal mt-2">During world war one, the technology for underwater detection was in its infancy. The US and Canadian- built, 80 foot Motor Launches were of a limited success, but it was the coming together of radio telephony, and directional hydrophones, as well as depth charge technology that brought about a new innovative craft. This was called the Subchaser. Thirty subchasers, under the command of Captain Hepburn arrived in Queenstown, Cork, Ireland, on the 21st of August 1918.   They were directed up the River Lee, past Monkstown, and arrived at their moorings opposite Passage West.</p>
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