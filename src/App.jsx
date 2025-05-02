import "./App.css";
import "./index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useLocalStorage } from "./hooks/useLocalStorage";
import axios from "axios";
//import { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("language", "en");
  //const [content, setContent] = useState(null);
  const {
    data: content,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["content"],
    queryFn: () =>
      axios
        .get("https://run.mocky.io/v3/1e4f1a11-1cda-49f4-a85c-631833abcbe6")
        .then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const langData = content[language];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        content={langData.header}
      />
      <Landing content={langData.landing} />
      <Skills />
      <Profile content={langData.profile} />
      <Projects content={langData.projects} />
      <Footer content={langData.footer} />
    </div>
  );
}

export default App;
