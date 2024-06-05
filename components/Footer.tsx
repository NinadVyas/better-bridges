import Image from "next/image"
import React from 'react';

export default function Footer() {
    return (
      <div className="relative isolate overflow-hidden  px-6 py-16 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <Image className="mx-auto h-12" width='50' height='20' src="/5.png" alt="mainone" />
          <figure className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
               <a href='https://www.github.com/ninadvyas' > <div className=" text-white hover:text-emerald-500">Github</div></a>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
               <a href='https://www.linkedin.com/in/ninadvyas' > <div className="hover:text-emerald-500 text-white">LinkedIn</div></a>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                  <circle cx={1} cy={1} r={1} />
                </svg>
               <a href='https://www.twitter.com/ninadvsd'> <div className="hover:text-emerald-500 text-white">Twitter</div></a>
              </div>
          </figure>
        </div>
      </div>
    )
  }