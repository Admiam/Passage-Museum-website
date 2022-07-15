import Image from 'next/image'
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { IoLogoTiktok } from "react-icons/io5"
import { IconContext } from "react-icons"
import Link from 'next/link'

const Footer = () => {
    return (
    <div className="text-w">
        <div className="flex flex-row w-full justify-between xl:mb-0 md:mb-8">
          <div className="xl:w-36 md:w-16">
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
            <div className="text-gray font-thin flex flex-col">
                <Link href="/#blog" className="text-gray font-thin">Blog</Link>
                <Link href="/#pricing" className="text-gray font-thin">Pricing</Link>
                <Link href="/#explore" className="text-gray font-thin">Explore us</Link>
                <Link href="https://www.patreon.com/" className="text-gray font-thin">Donate</Link>
            </div>
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
          
      </div>
    )
}
export default Footer