import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import ProfileImage from '../assests/profile.png';


const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-[#0a192f]  text-white">
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
                    {/* <div className="flex flex-col md:flex-row items-center">
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer md:mr-4"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <AiOutlineArrowRight className="ml-1" />
                            </span>
                        </Link>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-14 py-3 my-2 flex items-center rounded-md bg-red-800 cursor-pointer"
                        >
                            Resume
                        </Link>
                    </div> */}
                </div>
                <div className="md:w-1/2 md:order-3 mt-10 md:mt-0">
                   
                    <img src={ProfileImage} style={{width: '100%'}} alt="My Profile" className="w-[full] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border rounded-full border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center" />
                </div>
            </div>
        </div>


        // <div name='home' className=' w-full h-screen bg-[#0a192f]'>
        //     {/* container */}
        //         <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center ">
        //             <div className='w-full grid grid-cols-1 sm:grid-cols-2'>
        //                 <div>
        //                     <p className='text-pink-600 sm:text-2xl'>Hi, I'm </p>
        //                     <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hashini Thilinika</h1>
        //                     <h2 className='text-xl sm:text-3xl font-bold text-[#8892b0]'>Computer Science Undergraduate</h2>
        //                 </div>

        //                 <div className="ml-10"> 
        //                     <img className="w-[100px] h-[290px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] border rounded-full border-gray-600 dark:border-gray-200 relative md:mt-20 lg:mt-0 flex items-center justify-center" src= { ProfileImage } alt="myphoto" />
        //                 </div>
        //             </div>
        //         </div>
        //             <div>
        //                 <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
        //                     <Link to="about" smooth={true} duration={500} >
        //                         About Me
        //                     </Link>                        
        //                     <span className='group-hover:rotate-90 duration-300'>
        //                         <HiArrowNarrowRight className='ml-3' />
        //                     </span>
        //                 </button>   
        //             </div>
        // </div>
    )
}

export default Home;