"use client"
import { motion } from "framer-motion";
import { styles } from "@/Styles/styles";
import { fadeIn, textVariant } from "@/Utils/Constants/motion";
import { testimonials } from "@/Utils/Constants/Constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}: any) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="shadow-md shadow-main_color bg-black/50 p-10 rounded-3xl xs:w-[320px] md:w-[260px] lg:w-[320px] w-full z-10"
        >
            <p className="text-white font-black text-[48px]">"</p>

            <div className="mt-1">
                <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex flex-1 flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="blue-text-gradient">@ </span>
                            {name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px] text-white">
                            {designation} of {company}
                        </p>
                    </div>

                    <img
                        src={image}
                        alt={`feedback_by-${name}`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Feedbacks = () => {
    return (
        <div className={`px-5 md:px-12 mt-12 rounded-[20px]`}>
            <div
                className={`bg-main_color rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-white`}>What others say</p>
                    <h2 className={`${styles.sectionHeadText} text-white`}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-14`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
                ))}
            </div>
        </div >
    )
};

export default Feedbacks;
