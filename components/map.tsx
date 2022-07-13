import React from 'react'
import Image from 'next/image'

const Map = () => {
  return (
  <div>
    <div className="absolute right-24 ">
      <Image className="" src="/compassMap.png" alt="Compass" width={294} height={294}></Image>
    </div>
    <h1 className="text-7xl text-center font-500 font-cookie m-10" id="location">Where we are</h1>
    <div className="flex flex-row justify-between">
      <div className="mt-24">
        <div className="leading-snug mt-4">
          <h3 className="font-cookie text-3xl">Address</h3>
          <p className="text-2x font-sans">Main St, Passage West, Co. Cork</p>
        </div>
        <div className="leading-snug mt-4">
          <h3 className="font-cookie text-3xl">Email</h3>
          <p>info@passagemuseum.ie</p>
        </div>
        <div className="leading-snug mt-4">
          <h3 className="font-cookie text-3xl">Telephone</h3>
          <p>087 1357634</p>
        </div>
        <div className="leading-snug mt-4">
          <h3 className="font-cookie text-3xl">Open</h3>
          <p>Wednesday - Friday: 2pm - 5:30pm</p>
          <p>Saturday - Sunday: 2pm - 5pm</p>
        </div>
        <a href="https://www.google.com/maps/place/Passage+West+Maritime+Museum/@51.8735898,-8.3592992,12.78z/data=!4m5!3m4!1s0x48448361cca24071:0xe0928d9ab3cd0956!8m2!3d51.8721845!4d-8.3365377">
          <button type="button" className="ml-5 px-10 py-2 mt-8 border-2 rounded-full text-xl font-thin font-sans">Navigate</button>
        </a>
      </div>
      <div className="mt-28">
      <Image src="/map.png" alt="map" width={784} height={480}></Image>
      </div>
    </div>
    <div className="absolute left-[300px] top-[2450px]">
      <Image src="/pen3.png" alt="pen" width={779} height={920}></Image>
    </div>
  </div>
  )
}
export default Map