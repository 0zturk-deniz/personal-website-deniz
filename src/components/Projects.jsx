import projects1 from "../assets/projects1.jpg";
import projects2 from "../assets/projects2.jpg";


export default function Projects() {
    return (
        <section className="bg-[#CBF281] h-max py-20 px-40 font-inter">
            <h1 className="text-5xl font-semibold text-[#4731D3] mb-10">Projects</h1>
            <div className="bg-white w-[900px] h-[350px] rounded-xl align-center flex flex-row shadow-2xl mb-12">
                 <div>
                          <img
                            src={projects1}
                            alt="projects1 photo"
                            className="rounded-tl-xl rounded-bl-xl w-[350px] h-full object-cover"
                          />
                        </div>
                          
                        <div className='w-72 m-8'>
                        <p className="text-3xl text-[#4731D3] font-semibold">Workintech</p>
                            <p className="font-light text-black w-96 py-4 tracking-tight text-justify leading-snug">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                            
                            <div className='flex flex-row gap-2'>
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>react</p> 
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>redux</p> 
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>vercel</p> 
                            </div>

                            <div className='flex flex-row gap-14'>
                            <a href="/" target="_blank" rel="noopener noreferrer" className='block underline font-inter mt-6'>View Site</a>  
                            <a href="/" target="_blank" rel="noopener noreferrer" className='block underline font-inter mt-6'>Github</a>      
                            </div>
                                                 
                          </div>

                         
            </div>

            <div className="bg-white w-[900px] h-[350px] rounded-xl align-center flex flex-row shadow-2xl">
                 <div>
                          <img
                            src={projects2}
                            alt="projects2 photo"
                            className="rounded-tl-xl rounded-bl-xl w-[350px] h-full object-cover"
                          />
                        </div>
                          
                        <div className='w-72 m-8'>
                        <p className="text-3xl text-[#4731D3] font-semibold">Workintech</p>
                            <p className="font-light text-black w-96 py-4 tracking-tight text-justify leading-snug">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                            
                            <div className='flex flex-row gap-2'>
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>react</p> 
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>redux</p> 
                            <p className='rounded-full w-[70px] h-[30px] bg-[#4731D3] text-white text-sm font-light flex items-center justify-center'>vercel</p> 
                            </div>

                            <div className='flex flex-row gap-14'>
                            <a href="/" target="_blank" rel="noopener noreferrer" className='block underline font-inter mt-6'>View Site</a>  
                            <a href="/" target="_blank" rel="noopener noreferrer" className='block underline font-inter mt-6'>Github</a>      
                            </div>
                                                 
                          </div>

                         
            </div>

        </section>
    )
}