import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "./index.css"
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("language", "en");

  return (
    <div className={darkMode ? "dark" : ""}>
      
    <Header darkMode={darkMode} setDarkMode = {setDarkMode} language={language} setLanguage={setLanguage} />
    <Landing/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
    
    </div>
  )
}

export default App
