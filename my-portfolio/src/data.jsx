import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Gonçalo Cravo",
  },

  {
    id: 2,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 3,
    title: "Nationality : ",
    description: "Portuguese",
  },

  {
    id: 4,
    title: "Address : ",
    description: "Aveiro, Portugal",
  },

  {
    id: 5,
    title: "Email : ",
    description: "goncaloscravo@gmail.com",
  },

  {
    id: 6,
    title: "Languages : ",
    description: "Portuguese, English",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },

  {
    id: 2,
    title: "Css",
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  },

  {
    id: 3,
    title: "Javascript",
    img: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },

  {
    id: 4,
    title: "React",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },

  {
    id: 5,
    title: "Java",
    img: "https://www.vectorlogo.zone/logos/java/java-vertical.svg",
  },

  {
    id: 6,
    title: "Spring Boot",
    img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  },

  {
    id: 7,
    title: "Docker",
    img: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },

  {
    id: 8,
    title: "MySql",
    img: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
  },
];

export const portfolio = [
  {
    id: 1,
    img: null,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: null,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: null,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: null,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: null,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: null,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: null,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: null,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: null,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: null,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: null,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: null,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: null,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: null,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: null,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: null,
    color: "hsl(42, 100%, 50%)",
  },
];
