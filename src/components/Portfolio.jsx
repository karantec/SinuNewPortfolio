import React from 'react'


const Portfolio = () => {
    const Portfolio=[
        {
            id:1,
            src:"https://www.brsoftech.com/blog/wp-content/uploads/2020/03/1-1-1-1024x683.jpg",
            title:"ZomatoClone",
            Demo:"https://zomatoapp.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:2,
            src:"https://www.thestatesman.com/wp-content/uploads/2020/10/razorpay-logo-1024x683.jpg",
            title:"Razorpay Clone",
            Demo:"https://zomatoapp.vercel.app/",
            Link1:"Check it here"
            
        },
        {
            id:3,
            src:"https://www.tagvenue.com/blog/wp-content/uploads/2020/02/clay-banks-1Uj0HmqQFGk-unsplash-1024x683-1.jpg",
            title:"Dream Day Planner",
            Demo:"https://ddplanner.in/",
            Link1:"Check it here"
        },
        {
            id:4,
            src: "https://www.ketodirty.com/wp-content/uploads/2023/04/mounjaro-funny-meme-1024x683.jpg",
            title:"Meme Generator",
            Demo:"https://meme-generate-beryl.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:5,
            src: "https://media2.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif",
            title:"GIf Generator",
            Demo:"https://random-gif-generator-pi.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:6,
            src: "https://media.tenor.com/9E4evARoDzwAAAAd/offer-advice-some-advice.gif",
            title:"ReactAdviveApp",
            Demo:"https://react-advice-app-two.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:7,
            src: "https://media.tenor.com/9E4evARoDzwAAAAd/offer-advice-some-advice.gif",
            title:"ReactAdviveApp",
            Demo:"https://react-advice-app-two.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:8,
            src: "https://www.quleiss.com/wp-content/uploads/2023/03/eCommerce-1024x683.webp",
            title:"Ecomerce Store for Girls",
            Demo:"#",
            Link1:"Check it here"
        },
        {
            id:9,
            src: "https://www.dealsshutter.com/blog/wp-content/uploads/2019/07/bookmyshow-tickets-offer-1024x683.jpg",
            title:"South Movie Booking Site (Mern Stack)",
            Demo:"https://6424313bf0d1b309c965e40a--aquamarine-tanuki-02e886.netlify.app/",
            Link1:"Check it here"
        },
        {
            id:10,
            src: "https://crowdbotics.ghost.io/content/images/2021/09/EdTech.png",
            title:"StudyNotion (Mern Stack)",
            Demo:"#",
            Link1:"Check it here"
        },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full">
        <div className='max-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pt-12'>
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500 ">PORTFOLIO</p>
                <p className='py-6'>
                    CHECK OF MY WORKS 
                </p>
                </div>
                <div 
                    className="grid sm:grid-cols-2  items-center  md:grid-cols-3 gap-8  sm:px-0">
        
                {
                    Portfolio.map(({id,src,title,Demo,Link1})=>(
                        <div  key={id} 
                        className='shadow-md shadow-gray-rounded-lg items-center'>
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

export default Portfolio
