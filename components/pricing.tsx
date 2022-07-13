import React from 'react'
import Image from 'next/image'

const Pricing = () => {
  return (
    <div>
      <h1 className="text-7xl text-center font-500 font-cookie m-10" id="pricing">Pricing</h1>
            <div className="flex flex-row justify-between px-24">
              <div className="bg-b p-2 w-80 h-full">
                <div className="flex flex-row justify-between">
                  <Image src="/topL.png" alt="top" width={43} height={43}></Image>
                  <Image src="/topP.png" alt="top" width={43} height={43}></Image>
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
                  <Image src="/botL.png" alt="image" width={43} height={43}></Image>
                  <Image src="/botP.png" alt="image" width={43} height={43}></Image>
                </div>
              </div>
              <div className="bg-b p-2 h-full w-80">
                <div className="flex flex-row justify-between">
                  <Image src="/topL.png" alt="image" width={43} height={43}></Image>
                  <Image src="/topP.png" alt="image" width={43} height={43}></Image>
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
                  <Image src="/botL.png" alt="image" width={43} height={43}></Image>
                  <Image src="/botP.png" alt="image" width={43} height={43}></Image>
                </div>
              </div>
              <div className="bg-b p-2 w-80 h-full">
                <div className="flex flex-row justify-between">
                  <Image src="/topL.png" alt="image" width={43} height={43}></Image>
                  <Image src="/topP.png" alt="image" width={43} height={43}></Image>
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
                  <Image src="/botL.png" alt="image" width={43} height={43}></Image>
                  <Image src="/botP.png" alt="image" width={43} height={43}></Image>
                </div>
              </div>       
            </div>
            <div className="justify-center flex">
              <button className="font-cookie text-4xl bg-orange text-text py-1 px-14 mt-5">Donate</button>
            </div>
    </div>
  )
}
export default Pricing