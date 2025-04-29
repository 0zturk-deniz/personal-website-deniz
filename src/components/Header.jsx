export default function Header () {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-transparent">
            <p className="font-inter font-bold text-lg text-[#CBF281]">deniz</p>
           <div className="flex items-center gap-4"><button className="font-inter text-[#CBF281] bg-transparent">TÜRKÇE'YE GEÇ</button>
           <button className="font-inter text-[#4731D3] bg-transparent">DARK MODE</button></div> 
        </header>
    )
}