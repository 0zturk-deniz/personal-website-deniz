import { FaGithub, FaLinkedin } from "react-icons/fa"
import denizozturkprofile from '../assets/denizozturkprofile.jpeg';

export default function Landing() {
    return (
        <>
        <section className="flex justify-center">
            <div className="w-2/3 h-max bg-[#4731D3] flex flex-col justify-center items-start p-16 g-6">
            <h1 className="font-inter text-6xl font-semibold text-[#CBF281]">I am a Frontend <br/>Developer...</h1>
            <p className="font-inter font-xl text-white">...who likes to craft solid and scalable frontend <br/>products with great user experiences.</p>
            <div className="flex flex-row justify-center gap-4">
            <button className="bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"><FaGithub className="text-xl"/>GitHub</button>
            <button className="bg-white px-6 py-3 text-[#4731D3] font-inter rounded flex flex-row"><FaLinkedin className="text-xl"/>Linkedin</button>
            </div>
            
            </div>
            <div className="w-1/3 px-4 bg-[#CBF281]">
            <img src={denizozturkprofile} alt="deniz ozturk profile photo" className="rounded-lg w-80 aspect-square object-cover"/>
            </div>
            </section>
        </>

    )
}