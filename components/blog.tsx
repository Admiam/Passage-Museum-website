import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div>
            <h1 className="text-7xl text-center font-500 font-cookie m-10" id="blog">
              Blog
            </h1>
            <div className="flex xl:flex-row mn:flex-col">
              <div className="flex flex-row static">
                <div className="rotate-6 relative left-3 sm:left-0">
                  <Image className="z-20" src="/price.png" alt="Sirius ship" width={262} height={366}></Image>
                </div>
                <div className="bg-[url('../public/pricePaper.png')] md:py-6 mn:pb-6 sm:pl-6 sm:pr-5 mn:pl-6 mn:pr-2 bg-no-repeat relative top-4 right-1 text-text w-[340px] h-50 z-0">
                  <h2 className="sm:text-xl mn:text-sm text-center font-bold font-sans">
                    Heart of the Community Award
                  </h2>
                  <p className="sm:text-base mn:text-xs">In 2018, Angela and Jim Murphy of Passage West Maritime Museum got The Heart of the Community Award presented by Douglas Credit Union.</p>
                </div>
              </div>
              <div className="">
                <Image className="z-20" src="/visitMuseum.png" alt="Museum visit" width={532} height={402}></Image>
              </div>
            </div>
            <div className="flex xl:flex-row md:flex-col-reverse mn:flex-col-reverse">
              <div className="flex xl:flex-row static mn:flex-col">
                <div className=" sm:left-4 mn:left-0 bottom-4">
                  <Image className="z-20" src="/patrick.png" alt="Patrick Gerald Murphy visited the museum" width={475} height={328}></Image>
                </div>
                <div className="bg-[url('../public/patrickPaper.png')] py-6 pl-5 sm:pr-2 mn:pr-10 bg-no-repeat bg-contain text-text xl:w-[234px] xl:h-[326px] sm:w-[250px] sm:h-[350px] mn:w-[250px] mn:h-[300px] z-0">
                  <h2 className="xl:text-lg mn:text-base text-center font-bold font-sans">
                    Patrick Gerald Murphy visited the museum
                  </h2>
                  <p className="mt-2 xl:text-base sm:text-sm mn:text-sm">In march 2019 the museum was visited by a member of Cork County Council Patrick Gerald Murphy. He described museum as {`"`}A wonderful demonstration of what a community working together to enrich their local area can achieve.{`"`}.</p>
                </div>
              </div>
              <div className="flex xl:flex-col md:flex-row mn:flex-col">
              <div className="relative bottom-7 sm:left-2 mn:left-0 z-0">
                  <div className="bg-[url('../public/visitPaper.png')] sm:py-8 mn:pt-8 sm:pl-6 mn:pl-4 sm:pr-3 mn:pr-2 bg-no-repeat bg-contain text-text sm:w-[434px] sm:h-[283px] mn:w-[300px] mn:h-[190px]">
                    <h2 className="sm:text-lg mn:text-sm text-center font-bold font-sans">
                     Friendship agreement between Passage West Maritime Museum and King Island, Tasmania
                    </h2>
                    <p className="sm:mt-5 mn:mt-0 sm:text-base mn:text-xs">In another red-letter day for our museum, a delegation from King Island, Tasmania, including their Deputy Mayor, Luke Agati, visited Passage West to commemorate a tragic event which occurred over 11,000 miles from the coast of Cork.{`"`}</p>
                  </div>
                </div>
                <div className="md:mt-16 flex justify-center">
                  <a href="https://www.facebook.com/passagemuseum/">
                    <button type="button" className="bg-brown shadow-inner shadow-brownSH p-4 font-sans text-text rounded-xl text-lg font-semibold align-center xl:ml-14 md:m-4 mn:my-4 relative bottom-4 xl:w-80 md:w-40 sm:w-full">
                      <p>See more in our facebook</p>
                    </button>
                  </a>
                  </div>
              </div>
            </div>
          </div>
  )
}
export default Blog