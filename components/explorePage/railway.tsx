import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Railway = () => {
  return (
    <div className="flex flex-row text-w">
      <div className="w-1/2 mr-8">
        <Image src="/railway2.png" alt="Sirius Replica" width={600} height={327} className="rounded-lg" />
      </div>
      <div className="flex flex-col w-1/2 justify-between">
          <h1 className="font-cookie text-5xl">The Cork Blackrock & Passage railway</h1>
        <p className="font-sans text-xl font-normal mt-2">The Cork Blackrock & Passage railway opened in 1850, initially as a short suburban line, but after a 50 years of successful operation it was extended from Passage West, via Carrigaline, to Crosshaven. In narrow gauge days the line had two unusual features - a double track section between Cork and Blackrock, And a tunnel from Passage to the next station at Glenbrook. In 1930s, the growth of rival forms of transport had rendered the line totally uneconomic and it was closed to all traffic in 1932.</p>
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