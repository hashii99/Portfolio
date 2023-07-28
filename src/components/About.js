import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About Me</p>
                    </div>

                    {/* <div></div> */}
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-bold'>
                        <p>Let Me Introduce<br /> My Self </p>
                    </div>
                    <div>
                        <p>I'm Hashini Thilinka an undergraduate at the University of Colombo School of Computing 
                            who strives to think out of the box. 
                            I am good at adapting faster to newer technologies and grasping them easily and capable of making good technical decisions. 
                            As a flexible, good negotiator, I am interested in web and mobile application development 
                            and look forward to being a collaborative team worker who is effective in time management. 
                        </p>
                    </div>
                </div><br/><br /><br />

                <div className='sm:text-left text-2xl font-bold items-left'>
                    <p>MY PROFILE</p>
                </div><br />

                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-0 px-4'>
                    <div>
                        <p>Full Name : </p>
                        <p>Kuruppu Achchige Hashini Thilinika</p><br />
                        <p>Birth Date : </p>
                        <p>October 03, 1999</p><br />
                        <p>Job : </p>
                        <p>Undergraduate of UCSC</p>
                    </div>
                   
                    <div>
                        <p>Email :</p>
                        <p>hashinithilinika.av@gmail.com</p><br />
                        <p>Git Hub : </p>
                        <p>HashiniThilinika</p>
                    </div>
                </div>

                <br/>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to="skills" smooth={true} duration={500} >
                             Skills
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

export default About;