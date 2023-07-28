import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import CSS from '../assests/css.png';
import PHP from '../assests/php.png';
import GIT from '../assests/git.png';
import HTML from '../assests/html.png';
import Javascript from '../assests/javascript.png';
import Mongo from '../assests/mongo.png';
import ReactImage from '../assests/react.png';
import Node from '../assests/node.png';
import MySQL from '../assests/mysql.png';
import C from '../assests/C.png';
import CP from '../assests/Cplusplus.png';
import Expressjs from '../assests/express.png';
import Kotlin from '../assests/kotlin.png';
import MUI from '../assests/meterial.jpeg';
import Python from '../assests/python.png';
import GitHub from '../assests/github.png';



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>Languages and Tools</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ C } alt="HTML icon" />
                        <p className='my-4'>C</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ CP } alt="HTML icon" />
                        <p className='my-4'>C++</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ ReactImage } alt="HTML icon" />
                        <p className='my-4'>React</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Node } alt="HTML icon" />
                        <p className='my-4'>Node JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Expressjs } alt="HTML icon" />
                        <p className='my-4'>Express JS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ MUI } alt="HTML icon" />
                        <p className='my-4'>Meterial UI</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ PHP } alt="HTML icon" />
                        <p className='my-4'>PHP</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Javascript } alt="HTML icon" />
                        <p className='my-4'>Javascript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ HTML } alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ CSS } alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ GitHub } alt="HTML icon" />
                        <p className='my-4'>Git Hub </p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ GIT } alt="HTML icon" />
                        <p className='my-4'>GIT </p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ MySQL } alt="HTML icon" />
                        <p className='my-4'>MySQL </p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Mongo } alt="HTML icon" />
                        <p className='my-4'>MongoDB</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Kotlin } alt="HTML icon" />
                        <p className='my-4'>Kotlin</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ Python } alt="HTML icon" />
                        <p className='my-4'>Python</p>
                    </div>
                </div>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="credentials" smooth={true} duration={500} >
                             My Credentials
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

export default Skills;