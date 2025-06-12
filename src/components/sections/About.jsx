import { motion } from 'framer-motion';
import { techIcons } from '/src/data/projectsData';
import { infoItems } from '/src/data/aboutData';
import Carousel from '/src/components/Reactbits/Carousel'
import MotionWrapper from "/src/components/MotionWrapper";
import { slideInUp } from "/src/utils/motionVariants";
import NotMyPic from "/public/assets/About/notme.png";
import GithubLogo from "/public/assets/About/github.png";

export default function About() {
  const icons = Object.entries(techIcons);
  
  // imma clean this up, i promise
  return (
    <>
    <div className="flex items-center justify-center w-full pt-5">
    <MotionWrapper
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 10, duration: 3 }}
        className="relative"
      >
      <div className="grid w-full max-w-screen-xl grid-cols-1 sm:grid-cols-12 gap-4">
            {/* 1st Row - 2 columns */}
            {/* Left Column */}
            <div className="sm:col-span-6 col-span-1 bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg p-5 shadow flex flex-col justify-center">
              <div className="text-xl pb-2 font-bold text-zinc-300">
                Hi, I'm Jenny Marinay.
              </div>
              <hr className="border-white/10 mb-3" />
              <div className="text-xs font-medium text-zinc-600 pb-2 pt-3">
                BACK STORY
              </div>
              <div className="text-zinc-400 lg:text-base sm:text-sm">
                I discovered my passion for design when I found myself really invested in perfecting the visuals of the systems I was programming in freshman year. I started out focused on functionality, but soon got interested on design and user experience. That led me to dive into the world of UI, UX, and product design.
              </div>
              <div className="text-xs font-medium text-zinc-600 pt-5">
                WHAT I DO NOW
              </div>
              <div className="text-zinc-400 lg:text-base sm:text-sm pt-2 ">
                I'm a former frontend developer intern, currently leveling up my skills and actively looking for new opportunities. 
              </div>
            </div> 

            {/* Right Column */}
            <div className="sm:col-span-6 col-span-1 grid grid-cols-1 gap-4">
              {/* Top Row */}
              <div className="bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg shadow flex flex-col overflow-hidden">
                  <div className="text-xs font-medium text-start pt-5 px-5 text-zinc-600">
                    WHAT I DO
                  </div>
                  <div className="text-lg text-zinc-900 text-center flex-1 relative">
                    <Carousel
                      autoplay={true}
                      autoplayDelay={3000}
                      pauseOnHover={true}
                      loop={true}
                      round={false}
                      className="w-full h-full"
                    />
                  </div>
              </div>

            {/* Bottom Row */}
            <div className="bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg py-8 shadow flex flex-col overflow-hidden h-48">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10" />
              <h2 className="text-xl text-center font-bold text-zinc-300 mb-4">Stack I Use</h2>
                <motion.div
                  className="flex w-max gap-5 py-2"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 20,
                  }}
                >
                  {[...icons, ...icons].map(([name, url], index) => (
                    <div
                      key={index}
                      className="min-w-[50px] h-[50px] flex items-center justify-center bg-zinc-800 border border-zinc-600 rounded-lg shadow hover:scale-110 transition-transform"
                    >
                      <img
                        src={url}
                        alt={name}
                        className="w-6 h-6 object-contain"
                        title={name}
                      />
                    </div>
                  ))}
                </motion.div>
            </div>
          </div>
      </div>
    </MotionWrapper>
    </div>

    {/* 2nd Row - 3 columns */}
    <div className="flex items-center justify-center w-full pt-4">
    <MotionWrapper
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 10, duration: 3 }}
        className="relative"
      >
        <div className="grid w-full max-w-screen-xl grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="sm:col-span-6 col-span-1 bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg p-5 shadow flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {infoItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center px-2 py-1 rounded border border-zinc-600 text-zinc-400">
                      <div className="text-lg pr-2 text-green-400"><Icon /></div>
                      <div className="text-sm">{item.label}</div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Right Column */}
          <div className="sm:col-span-6 col-span-1 grid grid-cols-2 gap-4">
            <div className="bg-zinc-800 border border-white/20 backdrop-blur-md rounded-lg p-0 shadow flex flex-col overflow-hidden h-48">
              <img
                src= { NotMyPic }
                alt="Sidebar 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-zinc-800 border border-white/20 backdrop-blur-md rounded-lg p-0 shadow flex flex-col overflow-hidden h-48">
              <img
                src= { GithubLogo }
                alt="Sidebar 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </MotionWrapper>
      </div>



      {/* 3rd Row - 2 columns */}
      <div className="flex items-center justify-center w-full pt-4">
      <MotionWrapper
        variants={slideInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: 10, duration: 3 }}
        className="relative"
      >
        <div className="grid w-full max-w-screen-xl grid-cols-1 sm:grid-cols-12 gap-4">

          {/* Left Column */}
          <div className="sm:col-span-5 col-span-1 bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg p-6 flex flex-col justify-center shadow">
            <div className="flex flex-wrap gap-2">
              <div className="text-xs font-medium text-zinc-600">
                RANDOM STUFF
              </div>
              <div className="text-zinc-400 lg:text-base sm:text-sm pt-2 ">
                I enjoy exploring different stuff because in that way, it helps me figure out what I'm good at—and what I'm not.
              </div>
            </div>
           </div>

          {/* Right Column */}
          <div className="sm:col-span-7 col-span-1 bg-zinc-900 border border-white/20 backdrop-blur-md rounded-lg p-6 pb-0 flex flex-col justify-center shadow relative overflow-hidden whitespace-nowrap">
            {/* Tab Header */}
            <h2 className="text-xl text-center font-bold text-zinc-300 mb-4">My Internet Identity</h2>
            <div className="coding inverse-toggle text-sm mono subpixel-antialiased bg-zinc-800 border border-neutral-800 rounded-lg rounded-b-none overflow-hidden">
              {/* Tab Header */}
              <div className="flex items-center bg-neutral-900 py-3 px-5">
                <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            {/* Content */}
            <div className="px-6 pb-10 py-5 bg-neutral-900 text-zinc-400 border border-neutral-800">
            My name is Jenny Yin.
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/50 to-transparent z-10" />
        </div>
    
      </div>
      </MotionWrapper>
    </div>

    {/* soon to be filled */}
    {/* <div className="text-zinc-50 py-4 font-sans grid grid-cols-2 gap-4">
      <div className="bg-[#22223e] border border-white/20 flex items-center justify-center rounded-lg p-6">
      
      </div>
      <div className="bg-zinc-800 p-3 border border-white/20 rounded-lg flex flex-row justify-center">
      
      </div>
      </div> */}
    </>
  );
}
