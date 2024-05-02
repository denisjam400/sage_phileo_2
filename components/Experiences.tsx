"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../Styles/styles";
import { experiences } from "../Utils/Constants/Constants";

const ExperienceCard = ({ experience }: any) => {
    return (
        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element--work w-full"
            contentStyle={{ background: "#1e90ff", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1e90ff" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full rounded-full">
                    <img
                        src={experience.icon.src}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold vertical-timeline-element-title">{experience.title}</h3>
                <p
                    className="vertical-timeline-element-subtitle text-[19px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point: any, index: any) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experiences = () => {
    return (
        <div className='px-5 md:px-12 mt-16 w-full h-max flex flex-col gap-2'>
            <div>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </div>
            <div className="mt-6 md:mt-14 flex flex-col">
                <VerticalTimeline lineColor='#000000d4'>
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experiences