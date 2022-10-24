import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextss';
import './Booking.css'

const Booking = () => {
  const place = useLoaderData();


  const { user } = useContext(AuthContext)
  console.log(user);

  const { picture, title, about } = place;

  return (
    <div className='booking-banner apartmentImage' style={{
      backgroundImage: `linear-gradient(rgba(22, 9, 1, 0.2), rgba(0, 0, 0, 0.6)),url(${(picture)})`
    }}>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="grid   max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
          <div className="space-y-2 mt-20 ">
            <h2 className="text-4xl font-bold text-white  font-serif lg:text-6xl uppercase">{title}</h2>
            <div className="text-gray-100 font-thin">{about}</div>
          </div>
          {/* -=------------form */}
          <div className='bg-white text-center rounded-lg '>

            <div className="flex items-center justify-center text-center   text-gray-100 ">
              <form action="" className="flex flex-col w-full max-w-lg p-8 rounded shadow-lg text-gray-100 ng-untouched ng-pristine ng-valid">
                <label htmlFor="origin" className="self-start text-black font-semibold">Origin</label>
                <input id="text" name='origin' placeholder='Type Your origin' type="text" className="flex items-center cursor-text font-bold bg-slate-200 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-black focus:border-red-700  focus:ring-red-700" />

                <label htmlFor="destination" className="self-start mt-3  font-semibold text-black">Destination</label>
                <input id="destination" name='destination' placeholder='type name' type="text" className="flex items-center cursor-text font-bold bg-slate-200 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-red-700  focus:ring-red-700" />


                {/* date picker */}
                <label htmlFor="destination" className="self-start mt-3 font-semibold text-black">From</label>
                <input id="destination" name='destination' type="date" className="flex items-center cursor-text font-bold bg-slate-200 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-red-700  focus:ring-red-700" />


                <label htmlFor="dateTo" className="self-start mt-3 text-xs font-semibold">To</label>
                <input id="dateTo" name='dateTo' type="date" className="flex items-center cursor-text font-bold bg-slate-200 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900    focus:ring-red-700" />

                {/*  */}

                <button type="submit" className="flex items-center bg-red-800 justify-center h-12 px-6 mt-8 uppercase  font-semibold rounded  text-white">Login</button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div >
  );
};

export default Booking;