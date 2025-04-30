import { FaGithub, FaLinkedin } from "react-icons/fa"
import denizozturkprofile from '../assets/denizozturkprofile.jpeg';

export default function Landing() {
    return (
        <>
        <section className="flex justify-center h-100">
            
            <div className="w-2/3 bg-[#4731D3] flex flex-col justify-center items-start p-40 gap-6">

            <h1 className="font-inter text-5xl font-semibold text-[#CBF281]">I am a Frontend <br/>Developer...</h1>
            <p className="font-inter text-xl font-light text-white">...who likes to craft solid and scalable frontend <br/>products with great user experiences.</p>
            <div className="flex flex-row justify-center gap-4">
                <a href="https://github.com/0zturk-deniz" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"><FaGithub className="text-xl"/>Github</a>
                <a href="https://www.linkedin.com/in/ozturkdeniz/" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"><FaLinkedin className="text-xl"/>Linkedin</a>
            </div>
            </div>
            
            <div className="w-1/3 bg-[#CBF281]">
            <img src={denizozturkprofile} alt="deniz ozturk profile photo" className="rounded-xl w-80 aspect-square ml-[-150px] mt-24 object-cover"/>
            </div>
            
            
            </section>
        </>

    )
}