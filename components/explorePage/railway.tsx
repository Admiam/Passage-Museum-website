import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

const title = 'Explore Passage West Maritime Museum'
const url = 'https://www.admiam.com/exploreUs'

const Railway = () => {
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
            url: 'https://www.admiam.com/railway2.png',
            width: 600,
            height: 327,
            alt: 'The Cork Blackrock & Passage railway',
          },
        ],
      }}
    />
      <div className="md:w-1/2 mn:w-full mr-8">
        <Image src="/railway2.png" alt="The Cork Blackrock & Passage railway" width={600} height={327} className="rounded-lg" />
      </div>
      <div className="flex flex-col md:w-1/2 mn:w-full justify-between">
          <h1 className="font-cookie xl:text-5xl mn:text-4xl">The Cork Blackrock & Passage railway</h1>
        <p className="font-sans xl:text-xl sm:text-base mn:text-sm font-normal mt-2">The Cork Blackrock & Passage railway opened in 1850, initially as a short suburban line, but after a 50 years of successful operation it was extended from Passage West, via Carrigaline, to Crosshaven. In narrow gauge days the line had two unusual features - a double track section between Cork and Blackrock, And a tunnel from Passage to the next station at Glenbrook. In 1930s, the growth of rival forms of transport had rendered the line totally uneconomic and it was closed to all traffic in 1932.</p>
        <Link className="" href="/#location">
            <button className="mt-2 font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit">
                Visit us
            </button>
        </Link>
      </div>
    </div>
  )
}
export default Railway