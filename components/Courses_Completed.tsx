import { styles } from "@/Styles/styles"
import { CoursesCompleted_1, CoursesCompleted_2 } from "@/Utils/Constants/Constants"
import Image from "next/image"

const Courses_Completed = () => {

    function truncateString(str: string, num: number) {
        if (str.length <= num)
        {
            return str
        }

        return str.slice(0, num) + '...'
    }

    return (
        <div className="px-5 md:px-12 w-full h-max lg:h-[91vh] flex flex-col justify-between">
            <div className="pl-2 lg:pl-11 w-full h-auto lg:h-[20%] flex flex-col justify-center gap-1">
                <p className={`${styles.sectionSubText} text-main_color`}>Education</p>
                <h2 className={`${styles.sectionHeadText} capitalize`}>courses completed.</h2>
            </div>
            <div className="px-2 mt-8 lg:px-8 w-full h-max lg:h-[80%] flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-24 lg:gap-4">
                <div className="w-full lg:w-[48%] h-[116vh] md:h-[70vh] lg:h-full flex justify-center gap-6 lg:gap-3">
                    <div className="w-[70%] pt-2 lg:w-[75%] h-full flex flex-col justify-start items-start gap-8 lg:gap-4">
                        {CoursesCompleted_1.map(CC => (
                            <div key={CC.id} className="h-auto w-full flex flex-col gap-3">
                                <h5 className="text-xl capitalize">{CC.title}: </h5>
                                <p className="capitalize"> - {truncateString(CC.Story, 220)}.</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-[30%] md:w-[20%] pt-1 h-full bg-main_color rounded-2xl flex flex-col justify-start items-center gap-0">
                        {CoursesCompleted_1.map(CC => (
                            <div key={CC.id} className="w-[90%] h-[33%] flex justify-center items-start rounded-full">
                                <Image className="w-[85%] h-[30%] sm:h-[45%] lg:h-[65%] object-cover rounded-full" src={CC.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <h6 className="w-[1%] hidden lg:flex text-2xl">+</h6>
                <div className="w-full lg:w-[48%] h-[116vh] md:h-[70vh] lg:h-full flex justify-center gap-6 lg:gap-3">
                    <div className="w-[30%] md:w-[20%] pt-3 h-full bg-main_color rounded-2xl flex flex-col justify-start items-center gap-2">
                        {CoursesCompleted_2.map(CC => (
                            <div key={CC.id} className="w-[90%] h-[33%] flex justify-center items-start rounded-full">
                                <Image className="w-[85%] h-[30%] sm:h-[45%] lg:h-[65%] object-cover rounded-full" src={CC.img} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="w-[70%] pt-2 lg:w-[75%] h-full flex flex-col justify-start items-start gap-8 lg:gap-4">
                        {CoursesCompleted_2.map(CC => (
                            <div key={CC.id} className="h-auto w-full flex flex-col gap-3">
                                <h5 className="text-xl capitalize">{CC.title}: </h5>
                                <p className="capitalize"> - {truncateString(CC.Story, 220)}.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses_Completed