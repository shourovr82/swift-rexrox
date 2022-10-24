import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextss';
import './Header.css'

const Header = () => {
  const { user, logOutHandle } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    logOutHandle()
      .then(() => { })
      .catch(e => console.log(e))
  }

  return (
    <div>
      <div>
        <div className=''>
          <div className="px-4 py-5 bg-transparent  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex text-white items-center justify-between">
              <div className='relative'>
                <Link
                  to="/"
                  aria-label="Swift Rexrox"
                  title="Swift Rexrox"
                  className="top-[-30px] w-[300px] absolute"
                >
                  <img className=' ' src="https://i.ibb.co/8BtS46Z/image-2.png" alt="title" />
                </Link>

              </div>


              <ul className="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Product pricing"
                    title="Product pricing"
                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    About us
                  </a>
                </li>
              </ul>
              <ul className="flex items-center sm:hidden space-x-8 lg:flex">
                <li className='flex gap-3 items-center '>
                  {
                    user ?
                      <>
                        <button
                          onClick={handleSignOut}
                          className="border md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
                          hover:bg-[#f5453c]
                          hover:text-black
                          hover:border-[#152f308e]
                          hidden
                          hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none"
                          aria-label="Log Out"
                          title="Log Out"
                        >
                          Log Out
                        </button>

                        <img className='w-12 rounded-3xl'
                          src={user.photoURL || 'https://i.ibb.co/CWXGr84/ezgif.png'}

                          border="0" alt='' />
                      </>
                      :
                      <Link to='/login' className="border md:inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none
                      hover:bg-[#c22c25]
                      hover:border-[#00000004]
                      hidden
                      "
                        aria-label="Log In"
                        title="Log In"
                      >
                        Log in
                      </Link>

                  }

                </li>
                <li>


                </li>
              </ul>
              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 bg-slate-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>


                {/* phone */}

                {isMenuOpen && (
                  <div className="absolute z-10 top-0 left-0 w-full">
                    <div className="p-5 phone-menu border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <FontAwesomeIcon icon={faCodeCompare}>

                            </FontAwesomeIcon>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                              Swift Rexrox
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 bg-slate-200  transition duration-200 rounded hover:bg-gray-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-10 text-center text-black">
                          <li>
                            <a
                              href="/"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Product
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="Our product"
                              title="Our product"
                              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Features
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="Product pricing"
                              title="Product pricing"
                              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              About us
                            </a>
                          </li>



                          <li className='flex justify-evenly'>
                            {
                              user ?
                                <>
                                  <button
                                    onClick={handleSignOut}
                                    className="border inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 
                                     bg-[#f5453c]
                          hover:text-black
                          hover:border-[#152f308e]
                          hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none"
                                    aria-label="Log Out"
                                    title="Log Out"
                                  >
                                    Log Out
                                  </button>

                                  <img className='w-12' src="https://i.ibb.co/CWXGr84/ezgif.png" border="0" alt='' />
                                </>
                                :
                                <Link to='/login' className="border inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 uppercase focus:shadow-outline focus:outline-none bg-[#c22c25]
                      hover:border-[#00000004]
                      "
                                  onClick={() => setIsMenuOpen(false)}
                                  aria-label="Log In"
                                  title="Log In"
                                >
                                  Log in
                                </Link>

                            }

                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div >
      </div>
    </div >
  );
};

export default Header;