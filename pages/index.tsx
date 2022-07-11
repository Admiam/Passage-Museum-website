import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoTiktok } from "react-icons/io5"
import { IconContext } from "react-icons"
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Passage West Maritime Museum</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div className="bg-[url('../public/bg2x.png')] bg-cover pt-4 text-w">
          <div className="flex flex-row justify-between px-4 fixed z-40 w-full">
            <div className="">
             <Image className="" src="/icon.png" alt="" width={34} height={20}></Image>
            </div>
            <div className="space-x-10 font-sans flex justify-end font-medium">
              <Link href="#blog ">Blog</Link>
              <Link href="#location">Location</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#explore">Explore us</Link>
              <Link href="#about">About us</Link>
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
          <div className="mt-96 mx-40">
            <h1 className="text-7xl text-center font-500 font-cookie m-10" id="blog">
              Blog
            </h1>
            <div className="flex flex-row">
              <div className="flex flex-row static">
                <div className="rotate-6 relative left-3">
                  <Image className="z-20" src="/price.png" alt="Sirius ship" width={262} height={366}></Image>
                </div>
                <div className="bg-[url('../public/pricePaper.png')] py-6 pl-6 pr-5 bg-no-repeat relative top-4 right-1 text-text w-[340px] h-50 z-0">
                  <h2 className="text-xl text-center font-bold font-sans">
                    Heart of the Community Award
                  </h2>
                  <p>In 2018, Angela and Jim Murphy of Passage West Maritime Museum got The Heart of the Community Award presented by Douglas Credit Union.</p>
                </div>
              </div>
              <div className="">
                <Image className="z-20" src="/visitMuseum.png" alt="Museum visit" width={532} height={402}></Image>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row static">
                <div className="relative left-4 bottom-4">
                  <Image className="z-20" src="/patrick.png" alt="Patrick Gerald Murphy visited the museum" width={475} height={328}></Image>
                </div>
                <div className="bg-[url('../public/patrickPaper.png')] py-6 pl-5 pr-2 bg-no-repeat bg-contain text-text w-[234px] h-[326px] z-0">
                  <h2 className="text-lg text-center font-bold font-sans">
                    Patrick Gerald Murphy visited the museum
                  </h2>
                  <p className="mt-4">In march 2019 the museum was visited by a member of Cork County Council Patrick Gerald Murphy. He described museum as "A wonderful demonstration of what a community working together to enrich their local area can achieve.".</p>
                </div>
              </div>
              <div className="static">
              <div className="relative bottom-7 left-4 z-0">
                  <div className="bg-[url('../public/visitPaper.png')] py-8 pl-6 pr-4 bg-no-repeat bg-contain text-text w-[403px] h-[263px]">
                    <h2 className="text-lg text-center font-medium font-sans">
                      Patrick Gerald Murphy visited the museum
                    </h2>
                    <p className="mt-4">In march 2019 the museum was visited by a member of Cork County Council Patrick Gerald Murphy. He described museum as "A wonderful demonstration of what a community working together to enrich their local area can achieve.".</p>
                  </div>
                </div>
                <a href="">
                  <button type="button" className="bg-brown shadow-inner shadow-brownSH p-4 font-sans text-text rounded-xl text-lg font-semibold align-center ml-14 relative bottom-4 w-80">
                    <p>See more in our blog</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[url('../public/mapBg2.png')] py-16 bg-no-repeat bg-contain mx-14 pl-24 pr-24 mt-[176px] text-text w-[1333px] h-[928px] static">
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
               <Image className="" src="/map.png" alt="" width={784} height={480}></Image>
              </div>
            </div>
            <div className="absolute left-[300px] top-[2450px]">
              <Image className="" src="/pen3.png" alt="" width={779} height={920}></Image>
            </div>
          </div>
          <div className="mt-52">
            <h1 className="text-7xl text-center font-500 font-cookie m-10" id="pricing">Pricing</h1>
            <div className="flex flex-row justify-between px-24">
              <div className="bg-b p-2 w-80 h-full">
                <div className="flex flex-row justify-between">
                  <Image className="" src="/topL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/topP.png" alt="" width={43} height={43}></Image>
                </div>
                <div className="mx-10">
                  <h2 className="text-4xl font-cookie text-center">Default price</h2>
                  <div className="flex flex-row mt-8 justify-center">
                    <div className="flex flex-col space-y-7 mx-5 font-sans font-lg">
                      <span>Adult</span>
                      <span>Under 12</span>
                      <span>Group</span>
                    </div>
                    <span className="w-px bg-orange rounded-full"></span>
                    <div className="flex flex-col mx-5 space-y-7">
                      <span>4 €</span>
                      <span>FREE</span>
                      <span>Custom</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Image className="" src="/botL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/botP.png" alt="" width={43} height={43}></Image>
                </div>
              </div>
              <div className="bg-b p-2 h-full w-80">
                <div className="flex flex-row justify-between">
                  <Image className="" src="/topL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/topP.png" alt="" width={43} height={43}></Image>
                </div>
                <div className="mx-10">
                  <h2 className="text-4xl font-cookie text-center">Membership</h2>
                  <div className="flex flex-row mt-8 justify-center">
                    <div className="flex flex-col space-y-7 mx-5 font-sans font-lg">
                      <span>Adult</span>
                      <span>Family</span>
                    </div>
                    <span className="w-px bg-orange rounded-full"></span>
                    <div className="flex flex-col mx-5 space-y-7">
                      <span>10 €</span>
                      <span>20 €</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Image className="" src="/botL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/botP.png" alt="" width={43} height={43}></Image>
                </div>
              </div>
              <div className="bg-b p-2 w-80 h-full">
                <div className="flex flex-row justify-between">
                  <Image className="" src="/topL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/topP.png" alt="" width={43} height={43}></Image>
                </div>
                <div className="mx-10">
                  <h2 className="text-4xl font-cookie text-center">Buy book</h2>
                  <div className="flex flex-col mt-8">
                    <div className=" font-sans font-lg justify-center">
                      <p>Richard Hingston came late to the British Everest adventure of 1921-24, but he was without doubt one of the most compelling of all the characters in that epic mountaineering saga. A seasoned explorer, he was a brilliant naturalist, a highly decorated soldier, and ...</p>
                    </div>
                    <div className="flex flex-row justify-between mt-5">
                      <button className="bg-orange px-2 py-0.5 text-text font-sans">See more</button>
                      <span className="font-medium font-cookie text-4xl">20 €</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <Image className="" src="/botL.png" alt="" width={43} height={43}></Image>
                  <Image className="" src="/botP.png" alt="" width={43} height={43}></Image>
                </div>
              </div>       
            </div>
            <div className="justify-center flex">
              <button className="font-cookie text-4xl bg-orange text-text py-1 px-14 mt-5">Donate</button>
            </div>
          </div>
          <div className="absolute left-10">
                  <Image className="" src="/compass.png" alt="" width={215} height={215}></Image>
          </div>
          <div className="mt-80">
            <h1 className="text-7xl text-center font-500 font-cookie m-10" id="explore">Explore us</h1>
            <div className="mt-5 flex flex-row justify-between">
              <div className="pl-24">
                <h2 className="text-w font-cookie text-6xl">What you can learn in our <br/>museum?</h2>
                <button className="font-cookie text-w text-4xl bg-red py-2 px-14 rounded-2xl mt-8">Explore</button>
              </div>
              <div>
                <Image className="" src="/pictureSirius.png" alt="" width={543} height={624}></Image>
              </div>
            </div>
          </div>
          <div className="mt-80 px-24 pb-2">
            <h1 className="text-7xl text-center font-500 font-cookie m-10" id="about">About us</h1>
            <div className="mt-5 flex flex-row justify-between">
              <div className="w-1/2">
                <h2 className="text-w font-cookie text-6xl">Passage West Maritime Museum</h2>
                <p className="text-w font-sans text-xl">The Museum’s collection extends across a range of categories such as maritime history, shipbuilding and ship repair, emigration, the US naval presence in Cork Harbour and of course the stories of the generations of seamen associated with the town.
                While the focus of the Museum is centered upon the story of Passage West and its relationship to the sea, future exhibitions will feature other aspects of local history such the Cork Blackrock & Passage Railway, folklife, fishing, rowing, social and political history and noted personalities from the locality.
                Passage West now has a permanent home in which to store and display the wide variety of rare artefacts and archival material from various sources throughout the town itself as well as from nearby Glenbrook, Monkstown and the general lower harbour area.
                </p>
              </div>
              <div className="rotate-3">
                <Image className="" src="/pictureMuseum.png" alt="" width={399} height={399}></Image>
              </div>
            </div>
          </div>
        </div>
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
                  <ion-icon name="logo-instagram"></ion-icon>
                  <ion-icon src="instagram2.svg"></ion-icon>
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
                  <ion-icon name="logo-tiktok" size=''></ion-icon>
                  <ion-icon src="tiktok2.svg"></ion-icon>
                </a>
              </div>
              </div>
            </span>
            <div className="flex-grow border-t border-gray"></div>
          </div>
          <div>
            <p className="text-gray text-center mt-12 text-xs font-thin">Copyright © 2022 Passage West, Design and code by <a href="https://www.admiam.com/" className="text-w">Adam Míka</a></p>
          </div>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </footer>
    </div>
  )
}

export default Home
