import { RiGithubLine, RiLinkedinBoxLine, RiBehanceFill, RiFile2Line, RiMailLine } from 'react-icons/ri';

export const socialLinks = [
    {
        name: 'Email',
        url: 'mailto:jennymarinay.dev@gmail.com',
        icon: RiMailLine,
        coloredIcon: 'Email',
    },
    {
        name: 'Resume',
        url: 'https://drive.google.com/file/d/1_w9IpOHqCFnD3ZaswbQsyjGigvCzu-57/view?usp=sharing',
        icon: RiFile2Line,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/yinscript',
        icon: RiGithubLine,
        coloredIcon: 'GitHub',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jennymarinay2/',
        icon: RiLinkedinBoxLine,
        coloredIcon: 'LinkedIn',
    },
    {
        name: 'Behance',
        url: 'https://www.behance.net/jennymarinay',
        icon: RiBehanceFill,
        coloredIcon: 'Behance',
    },
];

export const iconMap = {
    Behance: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg",
    LinkedIn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    GitHub: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    Email: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
};
