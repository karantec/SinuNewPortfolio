import React from 'react'


const Services = () => {
    const Services=[
        {
            id:1,
            src:"https://img.freepik.com/free-vector/add-color-concept-illustration_114360-5604.jpg?w=1060&t=st=1686051445~exp=1686052045~hmac=a4be1a4b35d832663d87ab4269c2b52f9cd56e9dbd946bbd62553792dab6fa66",
            title:"Graphic Designing",
           
        },
        {
            id:2,
            src:"https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1060&t=st=1686051493~exp=1686052093~hmac=58aaacf5dd32e65ac2bf878974313dd9ecd4607420d2541eedcbf92473b7930e",
            title:"Web Development"
            
            
        },
        {
            id:3,
            src:"https://img.freepik.com/free-vector/mobile-testing-concept-illustration_114360-1564.jpg?w=1060&t=st=1686051552~exp=1686052152~hmac=d577dc6958f538c53c4ed5dcb2cebe17f9d52357c8a11c3c51e934f00eaf8b45",
            title:"App Development",
            
        },
        {
            id:4,
            src: "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?w=1060&t=st=1686051749~exp=1686052349~hmac=b774293ce6b6d49c140849e4060c47bdf0fbdd484058c0a764603185155ab268",
            title:"Portfolio Development",
            
        },
        {
            id:5,
            src: "https://img.freepik.com/premium-vector/concept-digital-marketing-male-character-portrayed-his-head-describe-digital-market-give-flat-vector-illustration-with-icon_610956-1385.jpg?w=996",
            title:"Digital Marketing",
        
        },
        {
            id:6,
            src: "https://img.freepik.com/free-photo/close-up-hand-writing-notebook-top-view_23-2148888824.jpg?w=1060&t=st=1686052176~exp=1686052776~hmac=3d4ddaa01409cf89c6fbf886dcc505e47215a87e91ae675b90a1244018c57223",
            title:"Content Writing",
            
        },
       
    ]
  return (
    <div name="Services" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full shadow-xl">
        <div className='max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pt-8 text-center'>
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">Service I offer</p>
                <p className='py-6'>
                    CHECK OF MY Services 
                </p>
                </div>
                <div 
                    className="grid sm:grid-cols-2  items-center  md:grid-cols-3 gap-8  sm:px-0">
        
                {
                  Services.map(({id,src,title})=>(
                        <div  key={id} 
                        className='shadow-md shadow-gray-rounded-lg items-center border-4 border-indigo-600'>
                        <img src={src} alt=""
                        className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'>{title}</p>
                         
                        </div>
                        </div>            
                    ))
                    }
                    </div>
                    </div>
                    </div>


      
  )
}

export default Services
