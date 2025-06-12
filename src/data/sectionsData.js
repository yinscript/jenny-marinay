export const homeSections = [
    {
        id: "hero",
        component: "Hero",
    },
    {
        id: "services",
        title: "Expertise",
        component: "Services",
    },
    {
        id: "journey",
        title: "Journey",
        component: "Journey",
        limit: 2,
        link: "/journey",
    },
    {
        id: "projects",
        title: "Projects",
        component: "Projects",
        limit: 3,
        link: "/projects",
    },
    {
        id: "contact",
        component: "Contact",
    },
];

export const routeSections = {
    journey: {
        title: "Journey",
        subtitle: "a look back at the steps I've taken so far",
        component: "Journey",
    },
    projects: {
        title: "Projects",
        subtitle: "a collection of projects that I've worked on",
        component: "Projects",
    },
    about: {
        title: "About",
        subtitle: "a glimpse into who I am and what I do",
        component: "About",
    }
};
  
