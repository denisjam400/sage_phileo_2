import { Intro, Skills, ToolsExp, Courses_Completed, Experiences, Contact, StarsCanvas, Feedbacks } from "@/components";

function Home() {
  return (
    <main className="w-full max-h-max flex flex-col justify-center gap-3 md:gap-0 md:justify-between mt-[80px]">
      <Intro />
      <Skills />
      <Experiences />
      <ToolsExp />
      <Courses_Completed />
      <Feedbacks />
      <div className="relative z-0 bg-black text-white w-full">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}

export default Home