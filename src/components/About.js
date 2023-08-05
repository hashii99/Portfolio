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
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-left text-4xl font-bold'>
                        <p>Let Me Introduce<br /> My Self </p>
                    </div>
                    <div>
                        <p>I am a third-year undergraduate at University of Colombo School of Computing and eagerly seeking opportunities to enhance and maintain my technical skills.
                             I'm interest on web and mobile development and I excited to put my knowledge to work as an effective and valuable team worker. 
                             My flexibility and adept negotiation skills allow me to adapt to diverse challenges and collaborate seamlessly with team members. 
                             I look forward to contributing as a collaborative team worker with effective in time management
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