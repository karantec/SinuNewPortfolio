import React from 'react'
import {useState } from "react";
import{FaBars,FaTimes} from "react-icons/fa";
const Navbar = () => {

    const [nav,setNav]=useState(false);

    const links=[
        {
            id:1,
            link:"Home",
        },
        {
            id:2,
            link:"About",
        },
        {
            id:3,
            link:"Portfolio",
        },
        {
            id:4,
            link:"experience",
        },
        {
            id:5,
            link:"contact"
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black px-4 py-4 text-white fixed'>
        <div> 
            <h1 className='text-4xl font-signature ml-2'>Karan</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({link,id})=>(
                        <li key={link.id} className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link}</li>
                        
                    ))
            }

            
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500  md:hidden'>
            {nav ? <FaTimes size={20}/>:<FaBars size={20}/>}

        </div>
        {
            nav && (
                <ul className='flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden  justify-center items-center'>
                {
                        links.map(({link,id})=>(
                                <li key={link.id} className='px-4 cursor-pointer capataliize py-6'>{link}</li>
                                
                            )) } 
        </ul>
  )}
       
    </div>
  )
}

export default Navbar