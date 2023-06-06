import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialIcons from './components/SocialIcons'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Services from './components/Services'


const App = () => {
  return (
    <div>
      
     <Navbar/>
     <Home/>
     <SocialIcons/>
     <About/>
     <Services/>
     <Portfolio/>
     <Experience/>
     <Contact/>
  
    </div>
  )
}

export default App