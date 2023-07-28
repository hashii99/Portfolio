import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfileImage from '../assests/profile.png';


const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-[#0a192f]  text-white">
            <div>
                <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
                    <div className="flex flex-col justify-center h-full md:w-1/2 order-2 md:order-1">
                        <div>
                            <p className='text-pink-600 text-2xl md:text-2xl'>Hi, I'm </p>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                                Hashini Thilinika
                            </h2>
                        </div>
                        <div>
                            <p className="text-2xl md:text-2xl py-4 text-gray-500 max-w-md text-sm md:text-base ml-2">
                                Computer Science Undergraduate
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:order-3 mt-10 md:mt-0">

                        <img src={ProfileImage} style={{ width: '100%' }} alt="My Profile" className="w-[full] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border rounded-full border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center" />
                    </div>
                </div>
                <div style={{marginLeft:'20%'}}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="about" smooth={true} duration={500} >
                            About Me
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>


       
    )
}

export default Home;