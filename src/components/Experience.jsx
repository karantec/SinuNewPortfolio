
import React from 'react'

const Experience = () => {
    const Skills=[
        {
            title:"Asp.Dot Framework and C#",
            id:1,
            src:"dotnet.jpeg",
            
        
        },
        {
            title:"Mern stack",
            id:2,
            src:"mern.png",
            
        },
        
        {
            id:4,
            src: "https://res.cloudinary.com/practicaldev/image/fetch/s--ysom2Zl---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png",
           
        },
        
        
        
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full">
        <div className='max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 justify-center'>
                <p className="text-4xl font-bold  border-b-4
                border-gray-500 text-center  
                ">Skills</p>
                <p className='py-6    text-center font-bold'>
                This are the technologies I have worked over
                </p>
                </div>
                <div 
                        className="grid sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 sm:px-0">
        
                {
                   Skills.map(({id,src,title,Demo,Link1})=>(
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