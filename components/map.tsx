import React from 'react'
import Image from 'next/image'

const Map = () => {
  return (
  <div>
    <div className="absolute xl:right-24 xl:top-[2200px] md:top-[3000px] md:right-10 sm:right-4 sm:top-[2600px] mn:right-4 mn:top-[2100px] xl:w-60 md:w-40 sm:w-40 mn:w-40">
      <Image className="" src="/compassMap.png" alt="Compass" width={294} height={294}></Image>
    </div>
    <h1 className="sm:text-7xl mn:text-6xl text-center font-500 font-cookie m-10" id="location">Where we are</h1>
    <div className="flex md:flex-row mn:flex-col md:justify-between">
      <div className="mt-24 items-center sm:text-center">
        <div className="leading-snug mt-4 mn:ml-6 sm:ml-0">
          <h3 className="font-cookie text-3xl">Address</h3>
          <p className="text-2x font-sans">Main St, Passage West, Co. Cork</p>
        </div>
        <div className="leading-snug mt-4  mn:ml-6 sm:ml-0">
          <h3 className="font-cookie text-3xl">Email</h3>
          <p>info@passagemuseum.ie</p>
        </div>
        <div className="leading-snug mt-4 mn:ml-6 sm:ml-0">
          <h3 className="font-cookie text-3xl">Telephone</h3>
          <p>087 1357634</p>
        </div>
        <div className="leading-snug mt-4 mn:ml-6 sm:ml-0">
          <h3 className="font-cookie text-3xl">Open</h3>
          <p>Wednesday - Friday: 2pm - 5:30pm</p>
          <p>Saturday - Sunday: 2pm - 5pm</p>
        </div>
        <div className="flex justify-center">
          <a href="https://www.google.com/maps/place/Passage+West+Maritime+Museum/@51.8735898,-8.3592992,12.78z/data=!4m5!3m4!1s0x48448361cca24071:0xe0928d9ab3cd0956!8m2!3d51.8721845!4d-8.3365377">
            <button type="button" className="sm:ml-5 px-10 py-2 mt-8 border-2 rounded-full text-xl font-thin font-sans">Navigate</button>
          </a>
        </div>
      </div>
      <div className="xl:mt-28 md:mt-60 mn:mt-10">
        <Image src="/map.png" alt="map" width={784} height={480}></Image>
      </div>
    </div>
    <div className="absolute xl:left-[290px] xl:top-[2445px] lg:left-[250px] lg:top-[3600px] sm:top-[3350px] mn:top-[2780px] md:left-[200] sm:left-[110px] mn:left-[65px] md:top-[3440px] xl:w-[800px] md:w-[500px] sm:w-[300px] mn:w-[205px] xl:rotate-6 md:rotate-[350deg] mn:rotate-[330deg]">
      <Image src="/pen3.png" alt="pen" width={779} height={920}></Image>
    </div>
  </div>
  )
}
export default Map