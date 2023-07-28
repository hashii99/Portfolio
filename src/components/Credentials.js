import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
// import CSS from '../assests/css.png';
// import PHP from '../assests/php.png';
// import GIT from '../assests/git.png';
// import HTML from '../assests/html.png';
// import Javascript from '../assests/javascript.png';
// import Mongo from '../assests/mongo.png';
// import ReactImage from '../assests/react.png';
// import Node from '../assests/node.png';
// import MySQL from '../assests/mysql.png';


const Credentials = () => {
    return (
        <div name='credentials' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>My Credentials</p>
                    <p className='py-4'>Education</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4  '>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-[#386ab4] p-4 rounded shadow group hover:bg-[#386ab4] cursor-pointer
                        ease-in duration-150"
                    >
                        <h3 className='text-[#0a192f] font-[700] mb-3 group-hover:text-black
                        group-hover:font-[600] text-xl'>Bachelor Degree | 2020-Present</h3>

                        <p className='text-[15px] text-smallTextColor group-hover:text-black
                        group-hover:font-[500] leading-7'>
                            Bachelor of Science in Computer Science <br /> Current GPA 3.2
                        </p>
                    </div>

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-[#386ab4] p-4 rounded shadow group hover:bg-[#386ab4] cursor-pointer
                        ease-in duration-150"
                        >
                        <h3 className='text-[#0a192f] font-[700] mb-3 group-hover:text-black
                        group-hover:font-[600] text-xl'> School Education </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-black
                            group-hover:font-[500] leading-7'>
                            Anula Vidyalaya, Nugegoda <br /> GCE Advanced Level | Combined Maths - B Chemistry - A Physics - C <br /> 
                            GCE Ordinary Level | A8 C1
                        </p>
                    </div>
                </div>

                <div>
                    <p className='py-4'>Volunteering</p>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4  '>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-[#386ab4] p-4 rounded shadow group hover:bg-[#386ab4] cursor-pointer
                        ease-in duration-150"
                    >
                        <h3 className='text-[#0a192f] font-[700] mb-3 group-hover:text-black
                        group-hover:font-[600] text-xl'>IntelliHack 2.0</h3>

                        <p className='text-[15px] text-smallTextColor group-hover:text-black
                        group-hover:font-[500] leading-7'>
                            IEEE Computer Society Student Branch Chapter of UCSC <br /> Member of Organizing Committee | Finance Team
                        </p>
                    </div>

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-[#386ab4] p-4 rounded shadow group hover:bg-[#386ab4] cursor-pointer
                        ease-in duration-150"
                        >
                        <h3 className='text-[#0a192f] font-[700] mb-3 group-hover:text-black
                            group-hover:font-[600] text-xl'> HACKAHOLICS 5.0 </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-black
                            group-hover:font-[500] leading-7'>
                            IEEE WIE Student Branch Affinity Group of UCSC  <br /> Member of Organizing Committee | Logistics Team
                        </p>
                    </div>

                    <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-[#386ab4] p-4 rounded shadow group hover:bg-[#386ab4] cursor-pointer
                        ease-in duration-150"
                        >
                        <h3 className='text-[#0a192f] font-[700] mb-3 group-hover:text-black
                            group-hover:font-[600] text-xl'> Carrier Fair 22/23 </h3>
                        <p className='text-[15px] text-smallTextColor group-hover:text-black
                            group-hover:font-[500] leading-7'>
                            UCSC <br />Member of Organizing Committee | Program & Hospitality Team
                        </p>
                    </div>
                </div> <br />

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="work" smooth={true} duration={500} >
                             Projects
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

export default Credentials;