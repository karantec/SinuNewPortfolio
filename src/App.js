import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialIcons from './components/SocialIcons'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Experience from './components/Experience'
const App = () => {
  return (
    <div>
      
     <Navbar/>
     <Home/>
     <SocialIcons/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
  
    </div>
  )
}

export default App