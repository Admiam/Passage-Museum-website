import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/blog'
import Map from '../components/map'
import Pricing from '../components/pricing'
import Explore from '../components/explore'
import About from '../components/about'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <html>
      <div>
        <Head>
          <title>Passage West Maritime Museum</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width"/>
          <meta name="googlebot" content="index,follow" />
          <meta name="keywords" content="Maritime, Museum, Cork, Ireland, Passage West" />
          <meta charSet="utf-8"/>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async/>
          <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async/>
        </Head>
        <main>
          <div className="xl:bg-[url('../public/bg2xO.png')] bg-cover bg-top pt-[1px] top-0 text-w w-full sm:bg-[url('../public/mobileBg.png')] mn:bg-[url('../public/mobileBg-mini.png')]">
            <Navbar/>
            <div className="xl:mt-[354px] xl:ml-[476px] lg:mt-[450px] lg:ml-[200px] md:mt-[354px] md:ml-[200px] sm:mt-[250px] sm:ml-[100px] mn:ml-12 mn:mt-[180px]">
              <Image className="" src="/sirius.png" alt="Sirius ship" width={149} height={74}></Image>
            </div>
            <div className="xl:mt-[30px] md:mt-16 sm:mt-4 mn:mt-0">
              <h1 className="xl:text-8xl text-center font-bold font-cookie sm:m-10 mn:m-4 sm:text-4xl md:text-6xl lg:text-7xl mn:text-4xl">
                Passage West Maritime Museum
              </h1>
            </div>
            <div  className="xl:mt-96 xl:mx-40 md:mt-80 md:mx-20 sm:mx-5 sm:mt-40 mn:mx-5 mn:mt-40">
              <Blog />
            </div>
            <div className="xl:bg-[url('../public/mapBg2.png')] md:bg-[url('../public/mobileMap2.png')] mn:bg-[url('../public/mobileMap.png')] h-auto  xl:py-16 xl:px-24 md:pt-10 md:pb-96 md:px-20 sm:pt-2 sm:pb-48 mn:px-6 bg-no-repeat bg-cover xl:mx-14 md:mx-0 mt-[176px] text-text mn:mx-max-0">
              <Map />
            </div>
            <div className="mt-52">
              <Pricing />
            </div>
            <div className="absolute left-10 xl:w-52 sm:w-40 mn:w-40 mn:mt-10 sm:mt-0">
                    <Image src="/compassO.png" alt="compass" width={215} height={215}></Image>
            </div>
            <div className="mt-80">
              <Explore path="/exploreUs" />
            </div>
            <div className="xl:mt-80 xl:px-24 md:px-20 sm:px-10 pb-2">
              <About />
            </div>
          </div>
        </main>
        <footer className="bg-b text-w flex flex-col xl:px-24 md:px-36 sm:px-16 mn:px-2 justify-between pt-12">
          <Footer />
        </footer>
      </div>    
    </html>
  )
}

export default Home
