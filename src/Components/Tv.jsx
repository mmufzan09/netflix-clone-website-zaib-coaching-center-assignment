import React from 'react'

const Tv = () => {
  return (
      <>
          <section className="flex justify-center items-center w-full  mx-auto text-white bg-black border-b-8  border-gray-500">
        <div className=''>
          <span className="block text-[44px] font-bold">
            Enjoy on your <br />
            TV
          </span>
          <span className="block text-[26px]">
            Watch on smart TVs, PlayStation,
            <br /> Xbox, Chromecast, Apple TV, Blu-
            <br />
            ray players and more.
          </span>
        </div>

        <div className="relative">
          <img
            src="/tv.png"
            alt="Smart TV"
            className="w-[555px] relative z-10"
          />
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
            autoPlay
            loop
            muted
            className="absolute top-[51px] right-0 w-[555px]"
          />
        </div>
      </section>
      </>
  )
}

export default Tv
