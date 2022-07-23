import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (
            <div className={`flex flex-row justify-between px-4 pt-4 fixed top-0 z-40 mn:w-full sm:bg-auto transition md:bg-transparent
            duration-500 ${!isOpen ? '' : 'mn:bg-b md:bg-b/0'}`}>
              <div className="items-center flex">
                <Link href="/" >
                    <Image src="/iconO.png" alt="logo" width={34} height={20} />
                </Link>
              </div>
              <nav className="">
                    <button className="md:hidden">
                        <Hamburger size={25} duration={0.5} toggled={isOpen} toggle={setIsOpen}/>
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <ul className={`fixed min-h-full
                                        right-0 left-0
                                       text-w bg-b p-4 md:bg-b/0
                                        md:text-xl mn:text-3xl space-y-7 transform 
                                        translate-x-full md:relative
                                        md:flex md:space-y-0 md:space-x-6 
                                        md:p-0 md:translate-x-0
                                        transition
                                        duration-500
                                        ${!isOpen ? 'translate-x-full' : 'translate-x-0'}
                                        `}> 
                            <li>
                                <Link href="#blog">
                                    <button className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                                        Blog
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#location">
                                    <button className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                                        Location
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing">
                                    <button className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                                        Pricing
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#explore">
                                    <button className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                                        Explore
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#about">
                                    <button className="cursor-pointer hover:text-b rounded-md p-4  hover:bg-w hover:bg-opacity-50">
                                        About us
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </button>
                </nav>
            </div>
  )
}
export default Navbar

{/* <div className="flex flex-row justify-between px-4 fixed z-40 sm:w-full sm:bg-auto">
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
</div> */}