import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface Button {
  path: string
}

const Explore = ({path}: Button) => {
  return (
    <div>
      <h1 className="text-7xl text-center font-500 font-cookie m-10" id="explore">Explore us</h1>
            <div className="mt-5 flex md:flex-row mn:flex-col justify-between md:items-start mn:items-center">
              <div className="xl:pl-24 md:pl-20 mn:items-center">
                <h2 className="text-w font-cookie xl:text-6xl lg:text-6xl sm:text-5xl mn:text-4xl">What can you learn in our <br/>museum?</h2>
                <Link className="" href={path}>
                  <button className="mt-8 xl:mb-0 mn:mb-10 font-cookie text-w text-4xl bg-red py-2 px-14 rounded-2xl md:w-fit mn:w-full">
                    Explore
                  </button>
                </Link>
              </div>
              <div className="xl:w-[550px] lg:w-[400px]">
                <Image src="/pictureSirius.png" alt="Sirius ship"width={543} height={624}></Image>
              </div>
            </div>
    </div>
  )
}
export default Explore