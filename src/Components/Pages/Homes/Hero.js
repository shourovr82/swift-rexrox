import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homes.css'

const Hero = ({ place }) => {

  const [mouse, setMouse] = useState(false)

  const { id, title, picture } = place;




  return (
    <div onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)} className=' relative'>
      <Link to={`/place/${id}`}>
        <div className="  transition-all 	 cursor-pointer hover:brightness-50 ">
          <img
            className="object-cover   rounded-lg  shadow-[#111] shadow-lg w-[400px] h-[250px]"
            src={picture}
            alt=""
          />
        </div>
      </Link>

      {
        mouse && <div>
          <Link to={`/place/${id}`}>
            <div className='absolute hover:block  top-[6rem] text-center text-white  p-50 w-full'>
              <h2 className='text-white font-serif cursor-pointer uppercase place-name font-bold text-2xl'> {title}</h2>
            </div>
          </Link>
        </div>
      }
    </div >





  );
};

export default Hero;