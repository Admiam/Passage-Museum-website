import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sirius = () => {
  return (
    <div className="flex md:flex-row mn:flex-col text-w">
      <div className="md:w-1/2 mn:w-full mr-10">
        <Image src="/sirius.jpg" alt="Sirius Replica" width={529} height={409} className="rounded-lg" />
      </div>
      <div className="flex flex-col md:w-1/2 mn:w-full">
        <h1 className="font-cookie xl:text-9xl md:text-7xl mn:text-5xl">The Sirius</h1>
        <p className="font-sans xl:text-2xl lg:text-xl font-thin">The first ship to cross the Atlantic entirely under steam in 1838</p>
        <p className="font-sans xl:text-xl sm:text-base mn:text-sm font-normal mt-2">SS Sirius was a wooden-hulled steamship built in 1837 by Robert Menzies for a transatlantic steam passenger service. It was first ship with steam engine to cross the Atlantic ocean. This voyage took 18 days and 4 hours. The boat was wrecked in 1847 near Ballycotton Bay.</p>
        <Link className="" href="/#location">
            <button className="mt-2 font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit">
                Visit us
            </button>
        </Link>
      </div>
    </div>
  )
}
export default Sirius