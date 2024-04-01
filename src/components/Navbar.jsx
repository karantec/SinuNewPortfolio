import React from 'react'
import {useState } from "react";
import{FaBars,FaTimes} from "react-icons/fa";
import {Link } from "react-scroll";
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
            link:"Services",
        },
        {
            id:4,
            link:"Experience",
        },
        {
            id:5,
            link:"Experience",
        },
        {
            id:6,
            link:"contact"
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 bg-black px-4 py-4 text-white fixed'>
        <div> 
            <h1 className='text-4xl font-signature ml-2 font-bold'>Karan</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(({link,id})=>(
                        <li key={link.id} className='cursor-pointer font-bold px-4 capitalize  text-white hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500} >{link}</Link>
                        </li>
                        
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
                                <li key={link.id} className='px-4 text-white font-bold cursor-pointer capataliize py-6'>
                                    <Link onClick={()=>setNav(!nav)} to={link}  className="text-white font-bold"smooth duration={500} >{link}</Link>
                                </li>
                                
                            )) } 
        </ul>
  )}
       
    </div>
  )
}

export default Navbar
