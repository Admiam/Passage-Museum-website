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
import Footer from '../components/footer'

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
        <div className="xl:bg-[url('../public/bg2x.png')] bg-cover pt-4 text-w w-full sm:bg-[url('../public/mobileBg.png')]">
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
          <div className="xl:mt-[354px] xl:ml-[476px] lg:mt-[450px] lg:ml-[200px] md:mt-[354px] md:ml-[200px] sm:mt-[180px] sm:ml-[100px]">
            <Image className="" src="/sirius.png" alt="Sirius ship" width={149} height={74}></Image>
          </div>
          <div className="xl:mt-[30px] md:mt-16 sm:mt-4">
            <h1 className="xl:text-8xl text-center font-bold font-cookie m-10 sm:text-4xl md:text-6xl lg:text-7xl">
              Passage West Maritime Museum
            </h1>
          </div>
          <div  className="xl:mt-96 xl:mx-40 md:mt-80 md:mx-20 sm:mx-5 sm:mt-40">
            <Blog />
          </div>
          <div className="xl:bg-[url('../public/mapBg2.png')] md:bg-[url('../public/mobileMap2.png')] h-auto  xl:py-16 xl:px-24 md:pt-10 md:pb-96 md:px-20 bg-no-repeat bg-cover xl:mx-14 md:mx-0 mt-[176px] text-text sm:mx-max-0">
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
          <div className="xl:mt-80 xl:px-24 md:px-20 pb-2">
            <About />
          </div>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async/>
          <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async/>
      </main>
      <footer className="bg-b text-w flex flex-col xl:px-24 md:px-16 justify-between pt-12">
        <Footer />
      </footer>
    </div>
  )
}

export default Home
