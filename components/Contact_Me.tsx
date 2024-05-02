"use client"
import { motion } from "framer-motion";
import { styles } from "@/Styles/styles";
import EarthCanvas from "./Canvas/Earth";
import { slideIn } from "@/Utils/Constants/motion";

const Contact = () => {

    const handleChange = () => { }

    return (
        <div
            className={`mb-[80px] px-5 md:px-12 lg:mt-12 flex lg:flex-row flex-col-reverse gap-4 lg:gap-10 overflow-hidden items-center`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="w-full md:w-[80%] lg:w-[42%] h-max bg-main_color p-5 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    className="mt-8 flex flex-col gap-6"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={""}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            value={""}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={""}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-white hover:bg-main_color py-3 px-8 rounded-xl outline-none w-fit hover:text-white text-black font-bold shadow-md shadow-primary"
                    >
                        Send
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="w-full lg:w-[55%] p-5 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default Contact;
