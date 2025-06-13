import projectsData, { techIcons } from "/src/data/projectsData";
import MotionWrapper from "/src/components/MotionWrapper";
import { fadeInUp } from "/src/utils/motionVariants";

const Projects = ({ limit = 0 }) => {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div className="max-w-4xl py-10 mx-auto text-zinc-300">
     {displayedProjects.map((project, index) => (
        <MotionWrapper
          key={project.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.15 }}
          as="a"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
      <a
        key={project.id}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col-reverse md:flex-row p-5 gap-8 mb-5 hover:bg-white/10 rounded-xl hover:p-5 transition duration-300"
      >
        {/* Project title and details */}
        <div className="flex-1">
          <div className="text-xs md:text-sm lg:text-sm text-zinc-400">{project.date}</div>
          <div className="text-lg lg:text-xl font-semibold my-2 text-zinc-300">{project.title}</div>
          <div className="text-sm lg:text-base text-zinc-300 mb-2">{project.description}</div>
          <div className="text-xs lg:text-base text-zinc-400 mb-2" title={project.url}>
            {project.url.length > 40 ? `${project.url.slice(0, 30)}...` : project.url}
            <span className="inline-block">&#8594;</span>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tech.map((tech, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-1 rounded bg-zinc-800"
              >
                <img
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-4 h-4 mr-2"
                />
                <span className="text-xs lg:text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
  
        {/* Image */}
        <div className="flex-1">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </a>
      </MotionWrapper>
    ))}
  </div>
  
  );
};

export default Projects;
