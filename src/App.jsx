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
import { useEffect } from "react";
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
    queryFn: () => axios.get("/content.json").then((res) => res.data),
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  const langData = content[language] ?? content.en;

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
      <Projects content={langData.projects} />
      <Profile content={langData.profile} language={language} />
      <Skills />
      <Footer content={langData.footer} />
    </div>
  );
}

export default App;
