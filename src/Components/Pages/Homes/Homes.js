import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import './Homes.css'

const Homes = () => {
  const touristspot = useLoaderData();



  return (
    <div className='banner-home'>
      <div>
        <br />
        <br />
        <br />
        <div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 uppercase text-white text-3xl font-bold tracking-tight font-mono sm:text-4xl sm:leading-none">
                    DARJEELING
                    <br className="hidden md:block" />
                    your next{' '}
                    <span className="inline-block text-deep-purple-accent-400">
                      destination
                    </span>
                  </h2>
                  <p className="text-base text-gray-300 font-thin md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae. explicabo.
                  </p>

                </div>
                <div>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-white bg-red-800  hover:bg-black px-4 py-2 rounded-md"
                  >
                    Book Now
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {
                  touristspot.map(place => <Hero
                    key={place.id}
                    place={place}
                  ></Hero>)
                }
              </div>

            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Homes;