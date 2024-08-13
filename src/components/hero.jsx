import { FaLinkedin, FaGithub, FaWordpress, FaDiscord } from "react-icons/fa";
import picture from '../assets/woman.jpg'




const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
            <div className="px-3 flex flex-col items-center relative">
                <div className="lg:w-60 w-20 lg:h-20 rounded-[560px] rounded-t-none border border-t-0 border-r-0 border-[#69835e] absolute z-20 opacity-30 right-0"></div>
                <div className="lg:w-60 w-20 lg:h-20 rounded-[560px] rounded-b-none border border-b-0 border-1-0 border-[#69835e] absolute z-20 opacity-50 left-0 lg:bottom-40 bottom-0"></div>
                <div className="flex flex-col gap-y-12 text-[#c3d9bd] absolute lg:left-[20%] left-2 top-1/4">
                    <FaLinkedin className="rounded-xl border-[#c3d9bd] p-1 text-3xl cursor-pointer" />
                    <FaGithub className="p-1 text-3xl cursor-pointer" />
                    <FaWordpress className="p-1 text-3xl cursor-pointer" />
                    <FaDiscord className="p-1 text-3xl cursor-pointer" />
                </div>

                <div>
                    <img src={picture} alt="" className="relative w-full -mt-8 z-20" />
                    <div className="bg-gradient-to-b from-[#3f5125] to-[#364823] rounded-full rounded-b-none lg:w-40 h-20 lg:p-8 p-4 absolute top-[40%] lg:-right-32 -right-[16%]">
                        <button className="rounded-full">
                            
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero