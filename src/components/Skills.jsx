import iconJS from '../assets/JavaScript-logo.png';
import iconReact from '../assets/React-icon.png';
import iconNode from '../assets/node-icon.png';
import iconVS from '../assets/vscode-icon.png';
import iconRedux from '../assets/redux-icon.png';
import iconFigma from '../assets/figma-icon.png';


export default function Skills() {
    return (
        <section className='dark:bg-[#252128] flex flex-row w-full h-max px-40 py-20'>
            <div>
                <h1 className="font-inter text-5xl font-semibold text-[#4731D3]">Skills</h1>
            </div>
            <div className="grid grid-rows-3 grid-cols-2 gap-y-8 gap-x-32 pl-32">
                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconJS} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>JAVASCRIPT</p>
                </div>

                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconNode} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>NODE</p>
                </div>

                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconReact} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>REACT</p>
                </div>


                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconVS} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>VS CODE</p>
                </div>
                
                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconRedux} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>REDUX</p>
                </div>
                
                <div className='flex flex-row items-center gap-6'>
                    <div className='object-cover aspect-square w-28 h-28 rounded-lg shadow-2xl overflow-hidden bg-white'><img src={iconFigma} alt="javascript icon" /></div>
                    <p className='font-inter text-2xl text-[#777777]'>FIGMA</p>
                </div>
                
                
            </div>
        </section>
    )
}