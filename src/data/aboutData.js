import FCC from "/public/assets/About/fcc.png"
import GoogleUX from "/public/assets/About/google-ux.png"
import IT from "/public/assets/About/it-specialist.png"
import Sololearn from "/public/assets/About/sololearn.png"
import { RiSearchLine, RiPencilLine, RiBrushLine, RiCodeLine, RiShieldCheckLine } from "react-icons/ri";

const aboutData = {
    techStack: {
        content: [
            { name: "Javascript", icon: "/images/js.png" },
            { name: "Figma", icon: "/images/figma.png" },
            // add more
        ],
    },
    experience: {
        content: [
            {
                role: "Frontend Developer Intern",
                company: "House of Representatives - Philippines",
                period: "Feb 2025 - May 2025",
            },
        ],
    },
    education: {
        content: [
            {
                degree: "Bachelor of Scientist in Information Technology",
                institution: "Adamson University",
                period: "Aug 2021 - Jul 2025",
            },
        ],
    },
    certifications: {
        content: [
            {
                title: "Intro to Programming Using Java",
                institution: "Sololearn",
                date: "May 2025",
                image: Sololearn
            },
            {
                title: "Google UX Design Certificate",
                institution: "Coursera",
                date: "Jul 2024",
                image: GoogleUX
            },
            {
                title: "Responsive Web Design",
                institution: "freeCodeCamp",
                date: "Apr 2025",
                image: FCC
            },
            {
                title: "IT Specialist in Databases",
                institution: "Pearson",
                date: "May 2025",
                image: IT
            },
        ],
    },
      
    designProcess: {
        steps: [
            { title: "Research", description: "Before creating something useful, I focus on the details. Careful planning is key.", icon: RiSearchLine },
            { title: "Wireframe", description: "With the details set, ideas move onto pen and paper, shaping the website's layout.", icon: RiPencilLine },
            { title: "Design", description: "The exciting part — adding style and life to the wireframes.", icon: RiBrushLine },
            { title: "Development", description: "Turning designs into a fully functional, practical product.", icon: RiCodeLine },
            { title: "Test", description: "Optimizing load speed, SEO, and performance for a seamless experience.", icon: RiShieldCheckLine },
        ]
          
    }
      
};

export const techIcons = {
    HTML: {
        name: "HTML",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    CSS: {
        name: "CSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    JavaScript: {
        name: "JavaScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    React: {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    TailwindCSS: {
        name: "TailwindCSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    Vue: {
        name: "Vue",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    Laravel: {
        name: "Laravel",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    Bootstrap: {
        name: "Bootstrap",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    MySQL: {
        name: "MySQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    Figma: {
        name: "Figma",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    AdobeXD: {
        name: "Adobe XD",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    },
    Notion: {
        name: "Notion",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    },
    FramerMotion: {
        name: "Framer Motion",
        url: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },
    Git: {
        name: "Git",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    Java: {
        name: "Java",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
};
  

export default aboutData;
  