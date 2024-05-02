import Image from "next/image"
import PP from "@/Assets/Profile/2.jpeg"
import IntroIMG from "@/Assets/neces/Untitled_drawing.png"
import { styles } from "../Styles/styles";
import { FaArrowRight } from "@/Utils/Constants/Icons/index"

const Intro = () => {

    return (
        <div className="px-5 md:px-12 w-full h-max lg:h-[85vh] mb-8 md:mb-16 lg:mb-0 lg:pt-14 flex flex-col-reverse lg:flex-row justify-end items-start lg:items-center gap-8 lg:gap-16">
            <div className="h-[55vh] lg:h-[80%] w-full lg:w-[28%] flex justify-center sm:justify-center items-center lg:justify-start lg:items-start relative">
                <div className="absolute left-12 z-10 sm:z-0 sm:static w-[90%] sm:w-[90%] md:w-[60%] lg:w-full h-[60%] sm:h-[73%] lg:h-[66%] rounded-lg flex justify-center items-center">
                    <Image className="w-full sm:w-[85%] md:w-full h-[85%] md:h-full object-cover rounded-lg" priority={true} quality={100} src={PP} alt="Portfolio Owner's Pics" />
                </div>
                <div className="absolute -left-3 top-2 sm:-left-10 sm:-top-5 md:-left-0 md:-top-16 lg:-left-40 lg:-top-28 -z-10 w-[350px] h-[380px] sm:w-full sm:h-[400px] md:w-[450px] lg:w-[500px] md:h-[480px] flex justify-center items-center">
                    <Image className="w-full h-full object-cover" priority={true} quality={100} src={IntroIMG} alt="Portfolio Owner's Pics" />
                </div>
            </div>
            <div className="h-[40vh] sm:h-[47vh] lg:h-[80%] w-full lg:w-[50%] flex flex-col gap-1 md:gap-3">
                <h1 className={`${styles.heroHeadText}`}>
                    Hi, I'm <span className="text-main_color uppercase">ojo</span>
                </h1>
                <p className={`${styles.heroSubText} capitalize md:mt-2 text-black/90`}>
                    an educator with a vision
                </p>
                <p className={`capitalize text-black/90 lg:text-[20px] sm:text-[15px] text-[13px] lg:leading-[30px]`}>
                    From analyzing student stumbles to integrating AI into ancient history, my educator's toolbox is overflowing with critical thinking, tech-savvy solutions, and a passion to ignite the potential within every learner
                </p>

                <button className="border-[1px] hover:font-bold border-black hover:border-none hover:bg-main_color hover:text-white mt-3 pl-4 capitalize w-[50%] sm:w-[30%] md:w-[25%] h-[15%] sm:h-[12%] lg:h-[9%] rounded-full flex justify-between items-center group">
                    about me
                    <span className="bg-main_color text-white group-hover:bg-black group-hover:text-main_color w-[30%] md:w-[23%] h-full rounded-full flex justify-center items-center text-lg">
                        <FaArrowRight />
                    </span>
                </button>
            </div>
        </div >
    )
}

export default Intro