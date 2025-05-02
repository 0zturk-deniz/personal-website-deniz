import Container from "./Container";

export default function Header({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  content,
}) {
  return (
    <header className="dark:bg-[linear-gradient(to_right,_#171043_0%,_#171043_70%,_#211F0B_70%,_#211F0B_100%)] bg-[linear-gradient(to_right,_#4731D3_0%,_#4731D3_70%,_#CBF281_70%,_#CBF281_100%)] font-inter">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-12">
          <p className="font-semibold text-2xl md:text-3xl text-[#CBF281]">
            deniz
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14">
            <button
              onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
              className="font-semibold text-sm text-[#CBF281] dark:text-[#BAB2E7]"
            >
              {content.langToggle}
            </button>

            <div className="flex flex-row items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out
                ${darkMode ? "bg-[#3A3A3A]" : "bg-[#8F88FF]"}`}
              >
                <div
                  className={`bg-[#FFE86E] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                  ${darkMode ? "translate-x-0" : "translate-x-8"}`}
                ></div>
              </button>

              <p
                className={`font-semibold text-sm ${
                  darkMode ? "text-[#D9D9D9]" : "text-[#4731D3]"
                }`}
              >
                {darkMode ? content.modeAlt : content.mode}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
