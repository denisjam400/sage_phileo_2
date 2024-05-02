"use client"
import { Tilt } from "react-tilt";
import { styles } from "../Styles/styles";
import { services } from "../Utils/Constants/Constants";
import Image from "next/image";

const ServiceCard = ({ title, icon }: any) => {
    return (
        <Tilt className="w-[47%] md:w-[24%] lg:w-[22%] h-[25vh] sm:h-[30vh] lg:h-[90%] flex justify-center items-center">
            <div
                className="w-full h-full bg-main_color p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    className="bg-tertiary rounded-[20px] py-2 px-8 lg:py-5 lg:px-12 h-full lg:min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <Image src={icon} alt={title} className="w-20 h-20 object-contain" />

                    <h3 className="text-white text-sm sm:text-base md:text-xl font-bold text-center">
                        {title}
                    </h3>
                </div>
            </div>
        </Tilt>
    );
};


const Skills = () => {
    return (
        <div className="px-5 md:px-12 h-max lg:h-[100vh] w-full flex flex-col gap-2">
            <div className="lg:pl-11 w-full h-auto lg:h-[30%] flex flex-col gap-2">
                <div>
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview.</h2>
                </div>

                <p
                    className="text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    I'm a skilled software developer with experience in TypeScript and
                    JavaScript, and expertise in frameworks like React, Node.js, and
                    Three.js. I'm a quick learner and collaborate closely with clients to
                    create efficient, scalable, and user-friendly solutions that solve
                    real-world problems. Let's work together to bring your ideas to life!
                </p>
            </div>

            <div className="mt-10 lg:mt-20 w-full h-auto lg:h-[65%] flex flex-wrap gap-3 md:gap-7 justify-center">
                {services.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </div>
    )
}

export default Skills;