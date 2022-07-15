import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <h1 className="text-7xl text-center font-500 font-cookie m-10" id="about">About us</h1>
            <div className="mt-5 xl:flex xl:flex-row-reverse xl:justify-between">
              <div className="rotate-3 xl:float-none md:float-right md:w-72">
                <Image src="/pictureMuseum.png" alt="picture"width={399} height={399}></Image>
              </div>
              <div className="xl:w-1/2">
                <h2 className="text-w font-cookie xl:text-6xl md:text-3xl">Passage West Maritime Museum</h2>
                <p className="text-w font-sans text-xl">The Museum’s collection extends across a range of categories such as maritime history, shipbuilding and ship repair, emigration, the US naval presence in Cork Harbour and of course the stories of the generations of seamen associated with the town.
                While the focus of the Museum is centered upon the story of Passage West and its relationship to the sea, future exhibitions will feature other aspects of local history such the Cork Blackrock & Passage Railway, folklife, fishing, rowing, social and political history and noted personalities from the locality.
                Passage West now has a permanent home in which to store and display the wide variety of rare artefacts and archival material from various sources throughout the town itself as well as from nearby Glenbrook, Monkstown and the general lower harbour area.
                </p>
              </div>
            </div>
    </div>
  )
}
export default About