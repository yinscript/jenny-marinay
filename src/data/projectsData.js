// Images
import TodoList from '/public/assets/Projects/todoList.png';
import TerminalPortfolio from '/public/assets/Projects/vuePortfolio.png';
import Soarchives from '/public/assets/Projects/soarchives.png';
import Snacz from '/public/assets/Projects/snacz.png';


const projectsData = [
    {
        id: 1,
        title: "TodoList",
        image: TodoList,
        date: "Apr 2025",
        description: "First attempt in using React. Learned the use of JSON local storage and applied it.",
        url: "https://minimal-todolist.vercel.app",
        tech: ["ReactJS", "TailwindCSS"],
    },
    {
        id: 2,
        title: "Terminal Portfolio",
        image: TerminalPortfolio,
        date: "Mar 2025",
        description: "A terminal-inspired web portfolio where I practiced my knowledge in Vue.",
        url: "https://yin-web-portfolio.vercel.app/terminal",
        tech: ["VueJS", "TailwindCSS"],
    },
    {
        id: 3,
        title: "Soarchives",
        image: Soarchives,
        date: "Feb 2025 - Dec 2025",
        description: "A social commerce centralized platform for showcasing and selling artisanal crafts.",
        url: "https://www.behance.net/gallery/215552791/SOARchives-Frontend-User-Interface-Design",
        tech: ["Laravel", "Bootstrap", "MySQL" ],
    },
    {
        id: 4,
        title: "Snacz",
        image: Snacz,
        date: "Jan 2025",
        description: "A UI/UX case study for a movie theater app, focusing on improving user experience and accessibility.",
        url: "https://www.behance.net/gallery/174934231/Snacz-Snack-Ordering-App-for-a-Movie-Theater",
        tech: ["Figma"],
    },
];

export const techIcons = {
    HTML: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ReactJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    TailwindCSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    VueJS: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    Laravel: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    AdobeXD: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    Notion: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    FramerMotion: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
};

export default projectsData;
  