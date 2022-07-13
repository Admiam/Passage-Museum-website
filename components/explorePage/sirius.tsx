import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sirius = () => {
  return (
    <div className="mx-32 flex flex-row text-w">
      <div className="w-1/2">
        <Image src="/sirius.jpg" alt="Sirius Replica" width={529} height={409} className="rounded-lg" />
      </div>
      <div className="flex flex-col w-1/2 justify-between">
        <h1 className="font-cookie text-9xl">The Sirius</h1>
        <p className="font-sans text-2xl font-thin">The first ship to cross the Atlantic entirely under steam in 1838</p>
        <p className="font-sans text-xl font-normal mt-2">SS Sirius was a wooden-hulled steamship built in 1837 by Robert Menzies for a transatlantic steam passenger service. It was first ship with steam engine to cross the Atlantic ocean. This voyage took 18 days and 4 hours. The boat was wrecked in 1847 near Ballycotton Bay.</p>
        <div className="mt-2 font-cookie text-b text-4xl bg-w py-2 px-14 rounded-2xl w-fit">
            <Link className="" href="">Read more</Link>
        </div>
      </div>
    </div>
  )
}
export default Sirius