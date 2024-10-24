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
      testimonial:"Thank you Kai and Angel for your help, i've been able to plan my projects in half the time!",
      name: "Michelle Odanga",
      designation: "Sr. eCommerce Program Manager",
      company: "Unity",
      link: "https://www.linkedin.com/in/michelle-odanga-27310239/",
      stars: 4,
    },
    {
      testimonial:
        "Very happy with the project, i've been filling out forms and invoices eight times faster than before. Highly recommend!",
      name: "Toby Green",
      designation: "CEO",
      company: "VIP Spooling",
      link: "https://www.vipspooling.com/",
      stars: 5,
    },
    
  ];
  
  const projects = [
    {
      name: "Foodbank Finder",
      description:
        "Web application prototype enabling users to find local foodbanks to locate or donate food, start foodbanks, and find other ways to help such as volunteering.",
      tags: [
        {
          name: "C#",
          color: "purple-text-gradient",
        },
        {
          name: "HTML",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "ASP.Net",
          color: "yellow-text-gradient",
        
        },
        {
          name: "JavaScript",
          color: "silver-text-gradient",
        
        },
        {
          name: "SQL",
          color: "teal-text-gradient",
        
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
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.JS",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        
      ],
      image: risktool,
      source_code_link: "https://github.com/KaiNahuina/AppraisalTool",
    },
    {
      name: "Workout Library",
      description:
        "Web app for personal trainers to create and manage custom workouts for clients, organize plans, and track progress, with support for both mobile and desktop users.",
      tags: [
        {
          name: "C#",
          color: "purple-text-gradient",
        },
        {
          name: "HTML",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        
        },
        {
          name: "JavaScript",
          color: "silver-text-gradient",
        
        },
        {
          name: "ASP.Net",
          color: "yellow-text-gradient",
        
        },
        {
          name: "SQL",
          color: "teal-text-gradient",
        
        },

      ],
      image: workoutLibrary,
      source_code_link: "https://github.com/An6el-01/WorkoutLibrary",
    },
    {
      name: "Control Panel",
      description:
        "This project develops an IoT system using a Raspberry Pi 4b, with MQTT for device communication. A React Native mobile app (built with Expo) controls the devices, while Node.js powers backend communication with the Raspberry Pi.",
      tags: [
        {
          name: "React Native",
          color: "magenta-text-gradient",
        },
        {
          name: "Node.JS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "silver-text-gradient",
        },
        {
          name: "Python",
          color: "coral-text-gradient",
        
        },
        

      ],
      image: controlPanel,
      source_code_link: "https://github.com/An6el-01/RaspberryPi-IoT",
    },
    
    
    
  ];

  const owners = [
    {
      name: "Ikaika Nahuina",
      image: kaiPic,
      role: "Co-Founder and Head of Web Development",
      background:"I'm a dynamic software engineer with a degree in Software Engineering from the University of Chester. I specialize in creating and optimizing responsive applications, using Agile methodologies to deliver secure, high-performance solutions. My experience spans developing tailored software for diverse clients, with a focus on efficient problem-solving, collaborative development, and ensuring high-quality outcomes.",
      link: "https://www.linkedin.com/in/ikaika-nahuina-0570261a4/",
    },
    {
      name: "Angel Salinas",
      image: angelPic,
      role: "Co-Founder and Head of App Development",
      background:"I am a passionate software developer with vast experience in creating custom mobile and web applications, as well as automation solutions tailored to my clients' needs. Leveraging cutting-edge technologies like AI, custom APIs, and IoT systems, I help businesses streamline operations, boost efficiency, and build a strong online presence.",
      link:"https://www.linkedin.com/in/%C3%A1ngel-salinas-25a15a22a/",
    },
  ];
  
  export { services, technologies, testimonials, projects, owners };