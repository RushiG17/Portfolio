// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import skyMentorLogo from "./assets/company_logo/skyMentor_logo.jpg";
import navabharatLogo from "./assets/company_logo/Navabharat_logo.svg";
import joshLogo from "./assets/company_logo/Josh_logo.svg";

// Education Section Logo's
import SGMM from "./assets/education_logo/SGMM.jpg";
import YashodaJClg from "./assets/education_logo/Yashoda Jr Clg.jpeg";
import YashodaHighSchool from "./assets/education_logo/Yashoda High School.jpeg";

// Project Section Logo's

import JobZee from "./assets/work_logo/JobZee.JPG";
import Foodies_Fantasy from "./assets/work_logo/Foodies_Fantasy.JPG";
import Weather_App from "./assets/work_logo/Weather_App.JPG";
import Stopwatch from "./assets/work_logo/Stopwatch.JPG";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: "Angular", logo: angularLogo },
      // { name: "Redux", logo: reduxLogo },
      // { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      // { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      // { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      // { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
      // { name: "Java", logo: javaLogo },
      // { name: "Python", logo: pythonLogo },
      // { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      // { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      // { name: "Compass", logo: mcLogo },
      // { name: "Vercel", logo: vercelLogo },
      // { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: skyMentorLogo,
    role: "MERN Stack Developer (Intern)",
    company: "SkyMentor",
    date: "May 2024 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React JS",
      "TypeScript",
      "Node JS",
      "Express JS",
      "MongoDb",
      "Multer",
      "File Upload",
      "JWT",
      "Postman",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    id: 1,
    img: navabharatLogo,
    role: "Scheduling Executive",
    company: "NavaBharat Newspaper Press Media",
    date: "July 2023 - Present",
    desc: "Responsible for managing advertisement workflows across multiple newspaper editions, including dummy sheet preparation, email and RO processing, ad allocation, coordination with operators and artists, ad quality checks, translation, proofreading, and ensuring timely, accurate publication. Also oversees layout management, team coordination, record keeping, billing support, and training of new team members.",
    skills: [
      "Dummy Preparation",
      "Email Management",
      "Matter Processing",
      "Advertisement Allocation",
      "Coordination with Operators",
      "RO Entry and Management",
      "Layout Management",
      "Ad Content Quality Check",
      "Print Readiness",
      "Page Additions",
      "Ad Creation Coordination",
      "Team Coordination",
      "CBC (DAVP) Management",
      "Translation and Proofreading",
      "Resource Management",
      "Records and Scheduling",
      "Time Management",
      "Billing Support",
      "Training and Mentorship",
    ],
  },
  {
    id: 2,
    img: joshLogo,
    role: "Quality Analyst",
    company: "Josh Application",
    date: "June 2022 - June 2023",
    desc: "Oversaw content quality across the platform, ensuring compliance with safety guidelines for diverse age groups.Removed inappropriate content, such as abusive language, pornography, and harmful material, in line with company and legal standards. Ensured consistent adherence to safety protocols, fostering a secure user environment.",
    skills: [
      "Safety compliance",
      "Policy enforcement",
      "Risk assessment",
      "Attention to detail",
      "Legal and regulatory compliance",
      "Communication skills",
      "Problem-solving",
    ],
  },
  // {
  //   id: 3,
  //   img: ,
  //   role: "",
  //   company: " ",
  //   date: " ",
  //   desc: "",
  //   skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  // },
];

export const education = [
  {
    id: 0,
    img: SGMM ,
    school: "Sant Gadge Maharaj Mahavidyalaya , Hingna , Nagpur",
    date: "June 2015 - June 2018",
    grade: "B (II)",
    desc: "I completed my Bachelor of Science (B.Sc.) in Physics, Chemistry, and Mathematics (PCM) from Sant Gadge Maharaj Mahavidyalaya, Hingna, Nagpur, with a Grade B (II) between April 2015 and June 2018. During this time, I developed a strong foundation in analytical thinking, problem-solving, and technical skills, which prepared me for further academic and professional pursuits.",
    degree: "Bachelor of Science - BSC (PCM)",
  },
  {
    id: 1,
    img: YashodaJClg ,
    school: "Yashoda Public Higher Secondary School, Nagpur",
    date: "March 2013 - Feb 2015",
    grade: "55.08%",
    desc: "I completed my class 12 education from Yashoda Public Higher Secondary School, Nagpur, under the Maharashtra State Board, where I studied Science (Physics, Chemistry , Mathematics , Biology). This period laid the groundwork for my interest in technology and programming.",
    degree: "MSB(XII),Pune - PCMB (Science)",
  },
  {
    id: 2,
    img: YashodaHighSchool,
    school: "Yashoda Marathi Madhyamik Vidyalaya, Nagpur",
    date: " March 2013",
    grade: "68.80%",
    desc: "I completed my class 10 education from Yashoda Marathi Madhyamik Vidyalaya, Nagpur, under the Maharashtra State Board, where I studied Science with Computer. ",
    degree: "MSB(X), Pune - Science with Computer",
  },


  // {
  //   id: 3,
  //   img: ,
  //   school: " ",
  //   date: "",
  //   grade: "",
  //   desc: " ",
  //   degree: "",
  // },
];

export const projects = [
  {
    id: 0,
    title: "Job Portal Web Application",
    description:
      "Full-stack job board with authentication, role-based dashboards, job listings, and application management. Built with React, Node.js, Express, and MongoDB, featuring JWT auth, file uploads (Cloudinary), and seamless front-end interactivity using Axios, React Router, and React Hot Toast.",
    image: JobZee,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "File Upload",
      "Axios",
      "React Router",
      " React Hot Toast",
      "API",
    ],
    github: "https://github.com/RushiG17/JobPortal",
    webapp: "",
  },
  {
    id: 1,
    title: "Foodie's Fantasy",
    description:
      "A feature-rich recipe search platform that helps users discover delicious recipes tailored to their preferences. Users can search for recipes and apply filters based on ingredients, meal type, and cuisine, making it easy to find the perfect dish for any occasion. Built with React and styled using Tailwind CSS, the app offers a smooth, responsive experience across devices.",
    image: Foodies_Fantasy,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS"],
    github: "https://github.com/RushiG17/Food-Recipe-Project",
    webapp: "",
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description:
      "A responsive web application that delivers live weather updates based on the user’s current location or a searched city. The app integrates with the OpenWeather API to provide real-time data, including temperature, weather conditions, humidity, and wind speed. Built with React for a dynamic user experience and styled using Tailwind CSS for a modern, mobile-friendly interface.",
    image: Weather_App,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "OpenWeather API",
    ],
    github: "https://github.com/RushiG17/Weather_Project",
    webapp: "",
  },
  {
    id: 3,
    title: "Stopwatch Application",
    description:
      "A simple yet fully responsive stopwatch app with essential time-tracking features. Users can easily start, stop, and reset the timer through an intuitive interface. Built with React for smooth state management and Tailwind CSS for a clean, responsive design that works seamlessly across all devices.",
    image: Stopwatch,
    tags: [ "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",],
    github: "https://github.com/RushiG17/Stopwatch-Project",
    webapp: "",
  },








  //   {
  //     id: 4,
  //     title: "Task Reminder Chrome Extension Tool",
  //     description:
  //       "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //     image: taskremLogo,
  //     tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //     github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //     webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  //   },
  
];
