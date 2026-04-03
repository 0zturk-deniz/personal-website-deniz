import Container from "./Container";

export default function Header({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  content,
}) {
  return (
    <header className="relative z-20 overflow-hidden border-b border-white/20 font-inter shadow-[0_14px_44px_-12px_rgba(23,16,67,0.42)] ring-1 ring-inset ring-white/10 dark:border-white/10 dark:shadow-[0_16px_48px_-10px_rgba(0,0,0,0.65)] dark:ring-white/5 bg-[linear-gradient(90deg,#4731D3_0%,#5F4FD8_32%,#8FAF9A_66%,#CBF281_100%)] dark:bg-[linear-gradient(90deg,#171043_0%,#1E1A52_48%,#211F0B_100%)] before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.2] before:to-transparent dark:before:from-white/[0.08]">
      <Container className="relative z-10">
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
