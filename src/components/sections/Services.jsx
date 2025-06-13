import SpotlightCard from "/src/components/Reactbits/SpotlightCard";
import { FaReact, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import MotionWrapper from "/src/components/MotionWrapper";
import { fadeInUp } from "/src/utils/motionVariants";

const services = [
  {
    icon: <FaPaintBrush size={30} className="mb-6 text-zinc-300" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and user-centered designs for web and mobile applications to enhance user experience.",
    spotlightColor: "rgba(255, 104, 212, 0.2)",
  },
  {
    icon: <FaReact size={35} className="mb-4 text-zinc-300" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using modern frontend frameworks.",
    spotlightColor: "rgba(0, 162, 255, 0.2)",
  },
  {
    icon: <FaLaptopCode size={35} className="mb-4 text-zinc-300" />,
    title: "Software Development",
    description:
      "Engineering efficient solutions to solve real-world problems with scalable backend logic.",
    spotlightColor: "rgba(0, 229, 255, 0.2)",
  },
];

const Services = () => {
  return (
    <div className="container max-w-4xl mx-auto py-10 flex items-center justify-start">
      <section className="grid gap-6 md:grid-cols-3 p-1 items-start text-start">
        {services.map(({ icon, title, description, spotlightColor }, i) => (
          <MotionWrapper
            key={title}
            variants={fadeInUp}
            delay={i * 0.2}
          >
            <SpotlightCard spotlightColor={spotlightColor} className="flex flex-col">
              {icon}
              <div className="text-md md:text-md lg:text-xl font-semibold mb-2 text-zinc-300">{title}</div>
              <div className="text-sm lg:text-base text-zinc-400">{description}</div>
            </SpotlightCard>
          </MotionWrapper>
        ))}
      </section>
    </div>
  );
};

export default Services;
