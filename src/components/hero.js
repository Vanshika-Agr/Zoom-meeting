import React from 'react'
import {Link} from 'react-router-dom'
function Hero(){
      return (
          <div className="bg-gray-900 h-[47rem]">
              <header>
                  <nav className="items-center pt-4 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-5 ">
                
                      <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-center text-center">
                            <li>
                             <Link to="/"> <div className="flex items-center text-gray-200 hover:text-violet-500">
                             HOST MEETING
                              </div></Link>
                          </li>
                          <li>
                             <Link to="/"> <div className="flex items-center text-gray-200 hover:text-violet-500">
                             JOIN MEETING
                              </div></Link>
                          </li>
                          <li>
                             <Link to="/signup"> <div className="flex items-center text-gray-200 hover:text-violet-500">
                                  LOGIN/SIGN UP
                              </div></Link>
                          </li>
                      </ul>
                  </nav>
              </header>
              <section className="mt-24 mx-auto max-w-screen-xl pb-20 px-6 items-center lg:flex md:px-8">
                  <div className="space-y-8 flex-1 sm:text-center lg:text-left">
                      <h1 className="text-white font-bold text-6xl xl:text-5xl">
                          Project
                           <span className="text-indigo-400"> Teams</span>
                      </h1>
                      <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                      Revolutionizing the way we connect, communicate, and collaborate in the digital age – our app is your gateway to seamless online meetings, where distance dissolves, ideas converge, and progress thrives, bringing people closer in a world that's more interconnected than ever before.                   </p>
                      
                  </div>
                  <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                      <img src="https://ouch-cdn2.icons8.com/rCNL4d9zepWjJnMZxsVB23SI8dhhHbF1dxLt-fYmqRk/rs:fit:368:286/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzc5/LzA0NmI5ZThjLWU1/YjgtNDM4ZC1hNDIz/LTE1Y2ZjZDI2ZThi/OC5zdmc.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                  </div>
            </section>
          </div>
      )
  }
  export default Hero
  