import { ToolsInfo, ToolsInfoXis } from "@/Utils/Constants/Constants"
import Image from "next/image"
import KI from "@/Assets/neces/952127850bb3d07a92c85643b02529e8.jpg"

const SliderX = ({ industry, mTNum, yearsRange, toolsName }: any) => {
    return (
        <div className={`hidden ${toolsName === "Interactive Whiteboards" ? "w-[29%]" : "w-[20%]"} h-[20%] p-1 rounded-xl border-[1px] border-black/85 lg:flex justify-between items-center`} style={{ marginTop: mTNum }}>
            <div className="w-1/4 h-full flex justify-center items-center rounded-full">
                <Image className="w-[80%] h-[80%] object-cover rounded-full" src={KI} alt="" />
            </div>
            <div className={`${toolsName === "Interactive Whiteboards" ? "w-[60%]" : "w-[40%]"} h-full flex flex-col justify-center gap-1`}>
                <h2 className="text-base">{toolsName}</h2>
                <h6 className="uppercase text-main_color text-[11px]">{industry}</h6>
            </div>
            <h5 className="w-[28%] h-full flex justify-center items-center text-xs">{yearsRange}</h5>
        </div>
    )
}
const SliderXs = ({ toolsName, industry, mTNum, yearsRange }: any) => {
    return (
        <div className={`flex lg:hidden ${toolsName === "Interactive Whiteboards" ? "w-[90%] md:w-[50%]" : "w-[70%] md:w-[30%]"} h-[19%] p-1 rounded-xl border-[1px] border-black/85 justify-between items-center`} style={{ marginRight: mTNum }}>
            <div className="w-1/4 h-full flex justify-center items-center rounded-full">
                <Image className="w-[80%] h-[80%] object-cover rounded-full" src={KI} alt="" />
            </div>
            <div className={`h-full ${toolsName === "Interactive Whiteboards" ? "w-[60%]" : "w-[40%]"} flex flex-col justify-center gap-1`}>
                <h2 className="text-base capitalize">{toolsName}</h2>
                <h6 className="uppercase text-main_color text-[11px]">{industry}</h6>
            </div>

            <h5 className="w-[28%] h-full flex justify-center items-center text-xs">{yearsRange}</h5>
        </div>
    )
}

const ToolsExp = () => {
    return (
        <div className="px-5 md:px-12 h-max py-9 lg:h-[70vh] w-full flex flex-col items-center">
            <div className="lg:pl-11 w-full h-[10%] my-9 flex flex-col justify-center">
                <p className={`capitalize text-lg lg:text-2xl`}>A brief history of tools i've worked with {'>'}</p>
            </div>
            <div className="lg:mt-2 w-full h-[50vh] lg:h-[90%] flex flex-col-reverse lg:flex-row gap-8 items-end lg:items-start justify-start lg:justify-center">
                {ToolsInfo.map(ToolsInfo => (
                    < SliderX key={ToolsInfo.id} {...ToolsInfo} />
                ))}
                {ToolsInfoXis.map(ToolsInfoXis => (
                    < SliderXs key={ToolsInfoXis.id} {...ToolsInfoXis} />
                ))}
            </div>
        </div>
    )
}

export default ToolsExp



