import { useState } from "react"

export default function Header () {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <header className="flex flex-row justify-between">
            <div className="w-2/3 bg-[#4731D3] flex flex-col justify-center items-start gap-15">
            <p className="font-inter font-semibold text-3xl text-[#CBF281] ml-40 mt-12">deniz</p>
            </div>
            <div className="w-1/3 bg-[#CBF281]">
            <div className="flex flew-row gap-4 ml-[-160px] p-6">
            <button className="font-inter font-semibold text-[#CBF281]">TÜRKÇE'YE GEÇ</button>
            <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out
              ${darkMode ? "bg-[#3A3A3A]" : "bg-[#8F88FF]" }`}
          >
            <div
              className={`bg-[#FFE86E] w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out
                ${darkMode ? "translate-x-0" : "translate-x-8"}`}
            ></div>
          </button>
           <p className={`font-inter font-semibold pt-0,5 ${darkMode ? "text-[#D9D9D9]" : "text-[#4731D3]"}`}>{darkMode ? "LIGHT MODE" : "DARK MODE"}</p>
           </div> 
           </div>
           
        </header>
    )
}