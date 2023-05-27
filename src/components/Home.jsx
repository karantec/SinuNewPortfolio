import React from 'react'
import {FiArrowRightCircle} from "react-icons/fi" 
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 " >

        <div className='max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl  font-bold text-white'>I am a Full <br/> <span className='text-blue-500'>Stack Developer</span></h2>
             <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis ut quod?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ratione voluptatum excepturi nulla?  
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut exercitationem facilis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus pariatur veritatis quibusdam!
             </p>
             <div>
                <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-pink-500
                cursor-pointer group ">
                    Projects 
                    <span className="group-hover:rotate-90 duration-300">
                        <FiArrowRightCircle scale={25} className='ml-2'/></span>
                </button>
             </div>
        </div>
             <div>
            <img src="" alt=""
            className='rounded-2xl max-auto w-2/3 md:w-full'/>
        </div>
        </div>
    </div>

    
  )
}

export default Home