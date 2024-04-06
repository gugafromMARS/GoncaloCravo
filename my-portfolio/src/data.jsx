import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";
import "./pages/home/Home.css";
import javaIcon from "./assets/java.svg";
import javascriptIcon from "./assets/javascript.svg";
import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import mySqlIcon from "./assets/mysql.svg";
import reactIcon from "./assets/react.svg";
import springIcon from "./assets/spring.svg";
import dockerIcon from "./assets/docker.svg";

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

export const welcome = [
  {
    text: "Junior",
    className: "home__tittle",
  },
  {
    text: "Backend",
    className: "home__tittle",
  },
  {
    text: "Developer🧑🏻‍💻",
    className: "home__tittle",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    img: htmlIcon,
  },

  {
    id: 2,
    title: "Css",
    img: cssIcon,
  },

  {
    id: 3,
    title: "Javascript",
    img: javascriptIcon,
  },

  {
    id: 4,
    title: "React",
    img: reactIcon,
  },

  {
    id: 5,
    title: "Java",
    img: javaIcon,
  },

  {
    id: 6,
    title: "Spring Boot",
    img: springIcon,
  },

  {
    id: 7,
    title: "Docker",
    img: dockerIcon,
  },

  {
    id: 8,
    title: "MySql",
    img: mySqlIcon,
  },
];
