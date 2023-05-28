
import React from 'react'

const Experience = () => {
    const Experience=[
        {
            id:1,
            src:"https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png",
            
        
        },
        {
            id:2,
            src:"https://img.freepik.com/free-photo/html-system-websites-concept_23-2150323524.jpg?w=900&t=st=1685295453~exp=1685296053~hmac=2561f9ad23cfca9a00923e41ba3b738c74599625dee232d1b83fa79986a425f1"
            
        },
        {
            id:3,
            src:"https://www.webskittersacademy.in/wp-content/uploads/2017/06/63c6da0634a2426c82cfb3d7_AdobeStock_297404376-1024x683.jpeg",
           
        },
        {
            id:4,
            src: "https://res.cloudinary.com/practicaldev/image/fetch/s--ysom2Zl---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png",
           
        },
        {
            id:5,
            src: "https://q4y2k3w9.rocketcdn.me/wp-content/uploads/2022/05/Materio-UI.png",
            
        },
        {
            id:6,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
            
        },
        {
            id:7,
            src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png",
            
        },
        {
            id:8,
            src: "https://static-00.iconduck.com/assets.00/mongodb-icon-icon-2048x1349-q7tkikwd.png",
            
        },
        {
            id:9,
            src: "https://www.strivemindz.com/images/ReactJS-Developers.png",
            
        },
        
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full">
        <div className='max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 justify-center'>
                <p className="text-4xl font-bold  border-b-4
                border-gray-500 text-center  
                ">Experience</p>
                <p className='py-6    text-center font-bold'>
                This are the technologies I have worked over
                </p>
                </div>
                <div 
                        className="grid sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 sm:px-0">
        
                {
                   Experience.map(({id,src,title,Demo,Link1})=>(
                        <div  key={id} 
                        className='shadow-md shadow-gray-rounded-lg'>
                        <img src={src} alt=""
                        className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                <a href={Demo}>{Link1}</a>
                            </button>
                            <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{title}</p>
                         
                        </div>
                        </div>            
                    ))
                    }
                    </div>
                    </div>
                    </div>


      
  )
}

export default Experience;