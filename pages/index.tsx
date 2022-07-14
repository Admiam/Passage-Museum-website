import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoTiktok } from "react-icons/io5"
import { IconContext } from "react-icons"
import Link from 'next/link';
import Blog from '../components/blog'
import Map from '../components/map'
import Pricing from '../components/pricing'
import Explore from '../components/explore'
import About from '../components/about'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Passage West Maritime Museum</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Visit our museum"/>
        <meta name="og:title" content="Passage West Maritime Museum"/>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <main>
        <div className="bg-[url('../public/bg2x.png')] bg-cover pt-4 text-w w-screen">
          <div className="flex flex-row justify-between px-4 fixed z-40 sm:w-full sm:bg-auto">
            <div className="cursor-pointer p-4">
              <Link href="/">
                <Image src="/icon.png" alt="logo" width={34} height={20} />
              </Link>
            </div>
            <div className="font-sans flex justify-end font-medium">
              <div className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                <Link href="#blog">Blog</Link>
              </div>
              <div className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
              <Link href="#location">Location</Link>
              </div>
              <div className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
              <Link href="#pricing">Pricing</Link>
              </div>
              <div className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
              <Link href="#explore">Explore us</Link>
              </div>
              <div className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
              <Link href="#about">About us</Link>
              </div>
            </div>
            </div>
          <div className="mt-[354px] ml-[476px]">
            <Image className="" src="/sirius.png" alt="Sirius ship" width={149} height={74}></Image>
          </div>
          <div className="mt-[30px]">
            <h1 className="text-8xl text-center font-bold font-cookie m-10">
              Passage West Maritime Museum
            </h1>
          </div>
          <div  className="mt-96 mx-40">
            <Blog />
          </div>
          <div className="bg-[url('../public/mapBg2.png')] py-16 bg-no-repeat bg-contain mx-14 pl-24 pr-24 mt-[176px] text-text w-[1333px] h-[928px] static">
            <Map />
          </div>
          <div className="mt-52">
            <Pricing />
          </div>
          <div className="absolute left-10">
                  <Image src="/compass.png" alt="compass" width={215} height={215}></Image>
          </div>
          <div className="mt-80">
            <Explore path="/exploreUs" />
          </div>
          <div className="mt-80 px-24 pb-2">
            <About />
          </div>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async/>
          <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async/>
      </main>
      <footer className="bg-b text-w flex flex-col px-24 justify-between pt-12">
        <div className="flex flex-row w-full justify-between">
          <div>
            <Image src="/logoCircle.png" alt="Passage West Logo" width={150} height={150} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-4xl font-cookie mb-1">Visit</h4>
            <span className="text-gray font-thin">Passage West Maritime Museum</span>
            <span className="text-gray font-thin">Main St, Passage West, Co. Cork</span>
            <span className="text-gray font-thin">Wednesday - Friday: 2pm - 5:30pm</span>
            <span className="text-gray font-thin">Saturday - Sunday: 2pm - 5pm</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-4xl font-cookie mb-1">Contact</h4>
            <span className="text-gray font-thin">087 1357634</span>
            <span className="text-gray font-thin">info@passagemuseum.ie</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-4xl font-cookie mb-1">Explore</h4>
            <a href="#blog" className="text-gray font-thin">Blog</a>
            <a href="#pricing" className="text-gray font-thin">Pricing</a>
            <a href="#explore" className="text-gray font-thin">Explore us</a>
            <a href="https://www.patreon.com/" className="text-gray font-thin">Donate</a>
          </div>
         </div>
          <div className="relative flex py-5 items-center h-8">
            <div className="flex-grow border-t border-gray"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              <div className="flex flex-row space-x-7 items-center">
            <IconContext.Provider value={{size: '3rem', className:"transition ease-in-out delay-50 text-w hover:-translate-y-1 hover:scale-110 hover:text-facebook duration-300"}}>
                <div>
                  <a href="https://www.facebook.com/passagemuseum/" className="hover:bg-orange">
                    <GrFacebookOption />
                  </a>
                </div>
            </IconContext.Provider>
            <div className="icon-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://www.instagram.com/passagemuseum/?hl=en">
                  <div className="svg1">
                    <Image src="/logo-instagram2.png" alt="instagram logo" width={43} height={43}></Image>
                  </div>
                  <div className="svg2">
                    <Image src="/instagram3.png" alt="instagram logo" width={43} height={43}></Image>
                  </div>
                </a>
              </div>
            <IconContext.Provider value={{size: '3rem', className:"transition ease-in-out delay-50 text-w hover:-translate-y-1 hover:scale-110 hover:text-twitter duration-300"}}>
                <div>
                  <a href="https://mobile.twitter.com/passagemuseum">
                    <AiOutlineTwitter />
                  </a>
                </div>
            </IconContext.Provider>
              <div className="icon-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://www.tiktok.com/@passagemuseum">
                  <div className="svg1">
                    <Image src="/logo-tiktok2.png" alt="tiktok logo" width={43} height={43}/>
                  </div>
                  <div className="svg2">
                    <Image src='/tiktok4.png' alt="tiktok logo" width={43} height={43}/>
                  </div>
                </a>
              </div>
              </div>
            </span>
            <div className="flex-grow border-t border-gray"></div>
          </div>
          <div>
            <p className="text-gray text-center mt-12 text-xs font-thin">Copyright © 2022 Passage West, Design and code by <a href="https://www.admiam.com/" className="text-w">Adam Míka</a></p>
          </div>
          
      </footer>
    </div>
  )
}

export default Home
