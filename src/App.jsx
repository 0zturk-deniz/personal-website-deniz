import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "./index.css"

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      
    <Header darkMode={darkMode} setDarkMode = {setDarkMode} />
    <Landing/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
    
    </div>
  )
}

export default App
