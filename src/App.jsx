import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import "./index.css"
import { useLocalStorage } from './hooks/useLocalStorage'
import {content} from "./data/content"

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("language", "en");
  const langData = content[language];

  return (
    <div className={darkMode ? "dark" : ""}>
      
    <Header darkMode={darkMode} setDarkMode = {setDarkMode} language={language} setLanguage={setLanguage} content={langData.header}/>
    <Landing content={langData.landing}/>
    <Skills/>
    <Profile content={langData.profile}/>
    <Projects content={langData.projects}/>
    <Footer content={langData.footer}/>
    
    </div>
  )
}

export default App
