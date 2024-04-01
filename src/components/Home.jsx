import React from 'react'
import {FiArrowRightCircle} from "react-icons/fi" 
import {Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="h-screen flex flex-row justify-center   items-center w-full bg-gradient-to-b from-black via-black to-gray-800 " >
        <div className='max-w-screen-lg max-auto flex flex-col items-center  h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full  '>
            <h2 className='text-3xl sm:text-5xl  font-bold  text-white mt-20 py-15 md:flex-col'>I am a Full <br/> <span className='text-blue-500'>Stack  Developer</span></h2>
             <p className=' py-4 max-w-md text-white'>  I am a visionary Software Engineer passionate about innovation, growth, and entrepreneurship. With a forward-thinking mindset, I drive product development and contribute to cutting-edge solutions that make a positive impact.

My journey in software engineering has been marked by a relentless pursuit of growth and contribution. Through hands-on experience and continuous learning, I have cultivated a deep understanding of technology and its potential to transform industries. </p>
                <Link to="portfolio" smooth-duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-pink-500
                cursor-pointer group ">
                    Projects 
                    <span className="group-hover:rotate-90 duration-300">
                        <FiArrowRightCircle scale={25} className='ml-2'/></span>
                </Link>
             </div>
       
             <div>
            <img src="hero.png" alt=""
            className='rounded-2xl  mt-8 x-auto w-2/3 md:w-full'/>
        </div>
        </div>
        </div>
    

    
  )
}

export default Home