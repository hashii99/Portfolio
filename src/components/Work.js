import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Project1 from '../assests/project1.jpg';
import Project2 from '../assests/project2.jpg';
import Project3 from '../assests/project3.jpg';
import Project4 from '../assests/project4.jpg';
import Project5 from '../assests/project5.jpg';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Check out some of my work</p>
                </div>

{/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* grid items */}
                    <div 
                        style={{backgroundImage: `url(${Project1})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-blod text-white tracking-wider'>
                               Gasify
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Second Year Group Project</p>
                                {/* <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${Project2})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-blod text-white tracking-wider'>
                               Happy Tails 
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Third Year Group Project</p>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${Project3})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-blod text-white tracking-wider'>
                                OnlineStore Application
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Simple OnlineStore Application</p>
                            </div>
                        </div>
                    </div>
                    
                    <div 
                        style={{backgroundImage: `url(${Project4})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-blod text-white tracking-wider'>
                                FOODIE
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Landing Page for a Restaurant</p>
                            </div>
                        </div>
                    </div>

                    <div 
                        style={{backgroundImage: `url(${Project5})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effects */} 
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-blod text-white tracking-wider'>
                                React SignUp & Login
                            </span>
                            <div className='pt-8 text-center'>
                                <p>Learning React</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="contact" smooth={true} duration={500} >
                             Contact Me
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

export default Work;

