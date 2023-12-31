import React, { useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Portfolio from '../assests/portfolio.png';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 bg-[#0a192f] text-white fixed"' >
        {/* <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300' > */}
            <div>
                <img src= { Portfolio } alt="logo image" style={{width:'90px'}} />
            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                        {/* <Link to="home" smooth={true} duration={500} > */}
                        <Link to="home" smooth={true} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-20' >
                            Home
                        </Link>
                    </li> 
                    <li>
                        <Link to="about" smooth={true}  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-20' >
                            About
                        </Link>
                    </li>
                    <li> 
                        <Link to="skills" smooth={true}  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-20' >
                            Skills
                        </Link>
                    </li>
                    <li> 
                        <Link to="work" smooth={true}  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-20' >
                            Projects
                        </Link>
                    </li>
                    <li> 
                        <Link to="contact" smooth={true}  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-20' >
                            Contact
                        </Link>
                    </li>
                </ul>

            {/* humburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
               {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                            Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                            About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                            Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                            Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                            Contact
                    </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 ml-[15px]'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/hashini-thilinika-76350721b/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/hashii99">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:hashinithilinika.av@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href={process.env.PUBLIC_URL + '/hashiniresume.pdf'} download='hashiniResume'>
                            Resume <BsFillArrowRightSquareFill size={30} />
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    )
}

export default Navbar;