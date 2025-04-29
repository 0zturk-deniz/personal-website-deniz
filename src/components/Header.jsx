import { FaToggleOn } from "react-icons/fa";

export default function Header () {
    return (
        <header className="flex flex-row justify-between">
            <div className="w-2/3 bg-[#4731D3] flex flex-col justify-center items-start gap-15">
            <p className="font-inter font-semibold text-3xl text-[#CBF281] ml-40 mt-12">deniz</p>
            </div>
            <div className="w-1/3 bg-[#CBF281]">
            <div className="flex flew-row gap-4 ml-[-150px] p-6">
            <button className="font-inter font-semibold text-[#CBF281]">TÜRKÇE'YE GEÇ</button>
           <button className="font-inter font-semibold text-[#4731D3]">DARK MODE</button>
           </div> 
           </div>
           
        </header>
    )
}