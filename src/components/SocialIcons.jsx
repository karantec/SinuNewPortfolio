import React from 'react'
import {FaGithub,FaLinkedin}from "react-icons/fa"
import {HiOutlineMail } from "react-icons/hi";
import {SiLeetcode} from "react-icons/si"
import {BsFillFileCodeFill} from "react-icons/bs"
import {BsFillArrowUpLeftSquareFill} from "react-icons/bs"

const SocialIcons = () => {
  const links=[
    {
      id:1,
      child:(
          <>
          LinkedIN <FaLinkedin size={20}/>
        </>
      ),
      href:"https://www.linkedin.com/in/karantech/",
      style:'rounded-tr-md'
    },
    {
      id:2,
      child:(
          <>
          Github <FaGithub size={20}/>
        </>
      ),
      href:"https://github.com/karantec",
     
    },
    {
      id:3,
      child:(
          <>
          Mail <HiOutlineMail size={20}/>
        </>
      ),
      href:"mailtO:foo@gmail.com",
      
    },
    {
      id:4,
      child:(
          <>
          Resume <BsFillArrowUpLeftSquareFill size={20}/>
        </>
      ),
      href:"https://drive.google.com/file/d/1BeqbdnAq9b9Eob09xOptG8p1VWffr3MO/view?usp=sharing",
      style:'rounded-br-md',
      download:true
    },
    {
      id:5,
      child:(
          <>
          Leetcode <SiLeetcode size={20}/>
        </>
      ),
      href:"https://leetcode.com/karanrana3095/",
      style:'rounded-br-md',
    
    },
    {
      id:6,
      child:(
          <>
          Geeks for Geeks <BsFillFileCodeFill size={20}/>
        </>
      ),
      href:"https://auth.geeksforgeeks.org/user/karanrana3095/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      style:'rounded-br-md',
    
    },
    {
      id:7,
      child:(
          <>
          CodeStudio <BsFillFileCodeFill size={20}/>
        </>
      ),
      href:"https://www.codingninjas.com/codestudio/profile/e4682635-9cf1-4a60-9bd1-4b2ced6d925b",
      style:'rounded-br-md',
    
    },
    
    
  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
    
    {links.map(({id,child ,href,style,download})=>(
<li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
          <a href={href}
          className='flex justify-between items-center w-full text-white'
            download={download}
            rel="noreferrer" 
            target="_blank"><>
         {child}
        </>   
        </a>
        </li>
         ))}
      </ul>


    </div>
  )
}

export default SocialIcons
