"use client"
import Link from "next/link"
import { TiThMenu } from "@/Utils/Constants/Icons/index"
import { useState } from "react"

const Navbar = () => {
    const [navBar, setNavBar] = useState(false)

    const navSwitcher = () => {
        setNavBar(!navBar);
    }

    return (
        <div className="fixed top-0 left-0 w-full h-[80px] flex justify-center items-center z-50">
            <nav className="backdrop-blur-md bg-gray-500/80 text-white px-3 lg:px-5 w-[85%] md:w-[80%] h-[70%] rounded-2xl flex justify-between items-center z-40">
                <h2>Sage Phileo</h2>

                <div className="h-full hidden lg:flex justify-center items-start gap-2">
                    <Link href={'#About'} className="h-full px-3 flex justify-center items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">skills</Link>
                    <Link href={'#About'} className="h-full px-3 flex justify-center items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">experience</Link>
                    <Link href={'#About'} className="h-full px-3 flex justify-center items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">testimonials</Link>
                    <Link href={'#About'} className="h-full px-3 flex justify-center items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">about</Link>
                    <Link href={'#About'} className="h-full px-3 flex justify-center items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">contact me</Link>
                </div>

                <h6 className="flex lg:hidden text-2xl cursor-pointer" onClick={() => navSwitcher()}><TiThMenu /></h6>

                {navBar && <nav className="absolute top-16 left-2 sm:left-5 border-[1px] w-[280px] sm:w-[70%] h-[43vh] px-5 py-3 flex lg:hidden rounded-3xl shadow-lg shadow-main_color bg-[#060202] border-white/75 z-40">
                    <ul className="w-full h-full flex flex-col justify-between items-start gap-4 z-40">
                        <Link href={'#About'} className="h-[18%] w-full px-3 flex justify-start items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">skills</Link>
                        <Link href={'#About'} className="h-[18%] w-full px-3 flex justify-start items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">experience</Link>
                        <Link href={'#About'} className="h-[18%] w-full px-3 flex justify-start items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">testimonials</Link>
                        <Link href={'#About'} className="h-[18%] w-full px-3 flex justify-start items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">about</Link>
                        <Link href={'#About'} className="h-[18%] w-full px-3 flex justify-start items-center hover:border-y-4 hover:border-main_color hover:text-base hover:text-main_color uppercase">contact me</Link>
                    </ul>
                </nav>
                }
            </nav>
        </div>
    )
}

export default Navbar