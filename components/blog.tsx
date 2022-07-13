import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div>
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
                  <p className="mt-2">In march 2019 the museum was visited by a member of Cork County Council Patrick Gerald Murphy. He described museum as {`"`}A wonderful demonstration of what a community working together to enrich their local area can achieve.{`"`}.</p>
                </div>
              </div>
              <div className="static">
              <div className="relative bottom-7 left-2 z-0">
                  <div className="bg-[url('../public/visitPaper.png')] py-8 pl-6 pr-3 bg-no-repeat bg-contain text-text w-[434px] h-[283px]">
                    <h2 className="text-lg text-center font-bold font-sans">
                     Friendship agreement between Passage West Maritime Museum and King Island, Tasmania
                    </h2>
                    <p className="mt-5">In another red-letter day for our museum, a delegation from King Island, Tasmania, including their Deputy Mayor, Luke Agati, visited Passage West to commemorate a tragic event which occurred over 11,000 miles from the coast of Cork.{`"`}.</p>
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
  )
}
export default Blog