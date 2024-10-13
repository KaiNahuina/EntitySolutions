import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    logo,
    carrent,
    foodbank,
    tripguide,
    threejs,
    risktool,
    kaiPic,
    angelPic,
    workoutLibrary,
    controlPanel,
    foodBank,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Mobile App Development",
      icon: mobile,
    },
    {
      title: "Bespoke Projects",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  
  
  //To add profile pictures, add new folder in assets, import image from folder into index.js in assets
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Michelle Odanga",
      designation: "Sr. eCommerce Program Manager",
      company: "Unity",
      link: "https://www.linkedin.com/in/michelle-odanga-27310239/",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Toby Green",
      designation: "CEO",
      company: "VIP Spooling",
      link: "https://www.linkedin.com",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      link: "https://www.linkedin.com",
    },
  ];
  
  const projects = [
    {
      name: "Foodbank Finder",
      description:
        "Web application prototype enabling users to find local foodbanks to locate or donate food, start foodbanks, and find other ways to help such as volunteering.",
      tags: [
        {
          name: "c#",
          color: "purple-text-gradient",
        },
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "ASP.Net",
          color: "pink-text-gradient",
        
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        
        },

      ],
      image: foodBank,
      source_code_link: "https://github.com/KaiNahuina/foodbank-project",
    },
    {
      name: "Risk-management Tool",
      description:
        "Project risk-management tool built to visualise the considerations and the resulting risk of taking on a new project or changing a current one.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "Node.JS",
          color: "pink-text-gradient",
        },
        
      ],
      image: risktool,
      source_code_link: "https://github.com/KaiNahuina/AppraisalTool",
    },
    {
      name: "Workout Library",
      description:
        "Description",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        
        },
        {
          name: "ASP.Net",
          color: "pink-text-gradient",
        
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        
        },

      ],
      image: workoutLibrary,
      source_code_link: "https://github.com/An6el-01/CO5227/tree/master",
    },
    {
      name: "Control Panel",
      description:
        "Description",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        
        },
        {
          name: "ASP.Net",
          color: "pink-text-gradient",
        
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        
        },

      ],
      image: controlPanel,
      source_code_link: "https://github.com/An6el-01/CO5227/tree/master",
    },
    
    
    
  ];

  const owners = [
    {
      name: "Ikaika Nahuina",
      image: kaiPic,
      role: "Co-Founder and Head of Web Development",
      skills:"Specialised in: Javascript, TypeScript, CSS, HTML, React, Node.js, Vue.js, Tailwind CSS, and SQL",
      background:"Im a dynamic software engineer specializing in object-oriented programming and other solutions, I focus on developing and optimizing responsive web and mobile applications and bespoke solutions. With expertise in the full software development lifecycle and Agile methodologies, I deliver innovative, secure solutions to complex challenges.",
      experience:"experience",
    },
    {
      name: "Angel Salinas",
      image: angelPic,
      role: "Co-Founder and Head of App Development",
      background:"I'm a passionate software developer, specializing in creating tailored mobile apps, web apps, and automation solutions to help businesses optimize processes and build a strong online presence. With a degree in Computer Science and experience in developing innovative software solutions, I focus on delivering efficient and scalable technologies that meet the unique needs of our clients.",
      experience:"From IoT systems to cross-platform applications, my technical expertise includes, but is not limited to, TypeScript, JavaScript, React, Artificial Intelligence, and database management. I’m driven by the goal of helping businesses thrive through the power of custom software, whether it’s automating tasks, improving workflows, or bringing innovative ideas to life.",
    },
  ];
  
  export { services, technologies, testimonials, projects, owners };