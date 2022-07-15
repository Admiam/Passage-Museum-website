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
            <div className="mt-5 flex flex-row justify-between">
              <div className="xl:pl-24 md:pl-20">
                <h2 className="text-w font-cookie xl:text-6xl lg:text-4xl">What you can learn in our <br/>museum?</h2>
                <Link className="" href={path}>
                  <button className="mt-8 font-cookie text-w text-4xl bg-red py-2 px-14 rounded-2xl w-fit">
                    Explore
                  </button>
                </Link>
              </div>
              <div>
                <Image src="/pictureSirius.png" alt="Sirius ship"width={543} height={624}></Image>
              </div>
            </div>
    </div>
  )
}
export default Explore