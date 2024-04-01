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
            src:"visualizer.png",
            title:"SoringVisualizer",
            Demo:"https://sorting-visualizer-psi-wheat.vercel.app/",
            Link1:"Check it here"
            
        },
        {
            id:3,
            src:"ddplanne.png",
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
            src: "remotedash.png",
            title:"Remote Dashboard",
            Demo:"https://remote-dashboard-final.vercel.app/",
            Link1:"Check it here"
        },
        {
            id:8,
            src: "commerce.png",
            title:"Ecomerce Store ",
            Demo:"https://ecommerce-react-silk.vercel.app/",
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
            id:11,
            src: "letscode.png",
            title:"Letscode Website",
            Demo:"https://www.lets-code.co.in/service",
            Link1:"Check it here"
        },
        {
            id:12,
            src: "remote.png",
            title:"letsRemoteApp",
            Demo:"https://letsremotejob.com/",
            Link1:"Check it here"
        },
        
        {
            id:14,
            src: "agri.png",
            title:"TradeTrailsApp",
            Demo:"https://tradetrails.in/",
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
