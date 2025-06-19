import aboutData from "/src/data/aboutData";
import { IoIosArrowForward } from "react-icons/io";
import BlurText from "/src/components/Reactbits/BlurText";
import Lanyard from '/src/components/Reactbits/Lanyard'
import { IoMdPin } from "react-icons/io";
import SpotlightCard from "/src/components/Reactbits/SpotlightCard";
import Contact from "/src/components/sections/Contact";
import { techIcons } from "/src/data/aboutData";

// Images
import AdU from "/public/assets/About/adu.png"
import HREP from "/public/assets/About/hrep.png"
import MyPic from "/public/assets/About/notme.png"

const About = () => {
  const handleAnimationComplete = () => {
  }
  return (
    <section id="about" className="max-w-4xl pt-10 m-auto">
        <Lanyard
          position={[0, 0, 17]}
          gravity={[0, -40, 0]}
          className="absolute -top-120 right-0 z-10"
        />
      {/* Introduction Section */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Text */}
        <div className="col-span-9">
          <BlurText
            text="Could I Be More Eager to Learn?"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4"
          />
        </div>

        {/* Right Column - Image */}
        <div className="col-span-3 lg:hidden">
          <img src={MyPic} alt="Profile" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      {/* Lanyard */}
      <div className="relative">
    
      </div>

      {/* Background Section */}
      <div className="pb-5 pt-5">
        <p className="text-zinc-400 pb-5 text-xs lg:text-base">
          I discovered my passion for <span className="underline decoration-sky-500">design</span> when I found myself really
          invested in perfecting the <span className="underline decoration-sky-500">visuals</span> of the systems I was programming in
          freshman year. I started out focusing on <span className="underline decoration-sky-500">functionality</span>, but soon got
          interested in <span className="underline decoration-sky-500">design</span> and <span className="underline decoration-sky-500">user experience</span>. That led me to dive into the
          world of <span className="underline decoration-sky-500">UI</span>, <span className="underline decoration-sky-500">UX</span>, and <span className="underline decoration-sky-500">product design</span>.
        </p>
        <p className="text-zinc-500 flex items-center gap-1 mb-5 text-xs lg:text-sm xl:text-base 2xl:text-lg">
            <IoMdPin /> <span>Manila, Philippines</span>
          </p>
      </div>

      {/* Skills Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">Skills</h2>
        <div className="flex flex-wrap gap-3 pb-12">
          {Object.entries(techIcons).map(([key, tech], index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
            >
              {/* Icon Image */}
              <img
                src={tech.url}
                alt={tech.name}
                className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
              />

              {/* Icon Name */}
              <span className="text-xs lg:text-sm text-gray-300 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">
          Experience
        </h2>
        <ul className="mb-12">
          {aboutData.experience.content.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 mb-4">
              {/* Logo on the left side */}
              <img src={HREP} alt={`${item.role} logo`} className="w-10 h-10 lg:w-15 lg:h-15 object-cover rounded-full" />

              {/* Content in the middle */}
              <div className="flex-grow">
                <h3 className="text-sm lg:text-xl font-semibold">
                  {item.role}
                </h3>
                <p className="text-xs lg:text-base text-zinc-500">
                  {item.company}
                </p>
              </div>

              {/* Period on the far right hihi */}
              <span className="text-zinc-500 text-xs lg:text-sm self-start pt-2">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Education Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">Education</h2>
        <ul className="mb-12">
          {aboutData.education.content.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 mb-4">
              {/* Logo on the left side */}
              <img src={ AdU } alt={`${item.degree} logo`} className="w-10 h-10 lg:w-15 lg:h-15 object-cover rounded-full" />

              {/* Content on the right side */}
              <div className="flex-grow">
                <h3 className="text-sm lg:text-xl font-semibold">
                  {item.degree}
                </h3>
                <p className="text-xs lg:text-base text-zinc-500">
                  {item.institution}
                </p>
              </div>
              {/* Period on the far right */}
              <span className="text-zinc-500 text-xs lg:text-sm self-start pt-2">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="pb-5">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 mb-4 pb-3">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {aboutData.certifications.content.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="nofollow noreferrer"
              className="group transform hover:scale-102 transition-all duration-300 cursor-pointer">
              <div
                className="bg-neutral-800 p-4 rounded-md border border-zinc-700 flex items-center gap-4">
                {/* Logo on the left side */}
                <img src={item.image} alt={`${item.title} logo`} className="w-10 h-10 lg:w-15 lg:h-15 object-cover" />

                {/* Text content on the right side */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm lg:text-base font-semibold">
                      {item.title}
                    </h3>
                    {/* Arrow icon placed directly after the title */}
                    <IoIosArrowForward className="text-zinc-500 group-hover:text-zinc-300 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                    {/* Institution | Date placed directly under the title */}
                    <p className="text-xs lg:text-sm text-zinc-500">
                      {item.institution} | {item.date}
                    </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Design Process Section */}
      <div className="pb-5">
        <div className="flex flex-col gap-10">
          {/* Top Row */}
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-light border-b border-zinc-700 -mb-15 pb-3">
             My Design Process
          </h2>
          <div div className="flex-1 flex items-center"></div>

          <div className="flex-1 h-80 overflow-x-auto scrollbar-hide relative">
            <div className="flex gap-4">
              {aboutData.designProcess.steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SpotlightCard
                    className="bg-transparent w-[220px] h-[220px] lg:h-[250px] flex-shrink-0"
                    key={idx}
                  >
                    <div className="flex flex-col items-start rounded-md max-w-full h-full">
                      <div className="text-base lg:text-lg text-sky-400 p-2 lg:p-3 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                        <Icon />
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold mb-2 pt-1 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs lg:text-sm">{item.description}</p>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      < Contact />
    </section>
  );
};

export default About;
