import projectsManagementImg from "../assets/projects-management.png";
import rabbit from "../assets/rabbit.png";
import kafka from "../assets/kafka.jpg";
import ecommerce from "../assets/ecommerce.png";
import diabetic from "../assets/diabetic.png";
import events from "../assets/events.jpg";
import sims from "../assets/sims.jpg";

export const projects = [
  {
    title: "Project and tasks management",
    techs: "Java 17, Spring Boot, Html, Css, React, Docker and MySql",
    reversed: false,
    link: "https://github.com/gugafromMARS/fullstack-project",
    thumbnail: projectsManagementImg,
  },
  {
    title: "Food delivery backend in microservices with RabbitMQ",
    techs:
      "Java 17, Spring Boot, RabbitMQ, Maven, Docker, MySql, Junit5 and Mockito",
    reversed: false,
    link: "https://github.com/gugafromMARS/FoodProject-Rabbitmq",
    thumbnail: rabbit,
  },
  {
    title: "Ecommerce in microsservices",
    techs: "Java 17, Spring Boot, Apache Kafka, Maven, MySql",
    reversed: true,
    link: "https://github.com/gugafromMARS/kafka-ecommerce",
    thumbnail: kafka,
  },

  {
    title: "Diabetic app backend",
    techs: "Java 17, Spring Boot, Maven, Docker, MySql, Junit5 and Mockito",
    reversed: false,
    link: "https://github.com/gugafromMARS/diabeticApp",
    thumbnail: diabetic,
  },
  {
    title: "Events Management in microservices",
    techs: "Java 17, Spring Boot, Maven, Docker, MySql, Junit5 and Mockito",
    reversed: false,
    link: "https://github.com/gugafromMARS/events-management-mcs",
    thumbnail: events,
  },
  {
    title: "Ecommerce backend with Quarkus",
    techs: "Java 17, Quarkus, Maven, Docker, MySql, Junit5 and Mockito",
    reversed: false,
    link: "https://github.com/gugafromMARS/ecommerce-quarkus",
    thumbnail: ecommerce,
  },

  {
    title: "The Sims",
    techs: "Java 17",
    reversed: true,
    link: "https://github.com/gugafromMARS/TheSimsFinal",
    thumbnail: sims,
  },
];
