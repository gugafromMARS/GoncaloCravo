import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  ReactLogo,
  JavascriptLogo,
  SpringBootLogo,
  JavaLogo,
  StudentLogo,
} from "../../components/logos/Logos";

export default function Education() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2024 - present"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<ReactLogo />}
      >
        <h2 className="vertical-timeline-element-title">
          React - The Complete Guide 2024 (incl. React Router & Redux)
        </h2>
        <h3 className="vertical-timeline-element-subtitle">Udemy</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          Dive in and learn React.js from scratch! Learn React, Hooks, Redux,
          React Router, Next.js, Best Practices and way more!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2024 - March 2024"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<JavascriptLogo />}
      >
        <h2 className="vertical-timeline-element-title">
          The Complete JavaScript Course 2024: From Zero to Expert!
        </h2>
        <h3 className="vertical-timeline-element-subtitle">Udemy</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          The modern JavaScript course for everyone! Master JavaScript with
          projects, challenges and theory. Many courses in one! Mais vendidos
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2023 - Nov 2023"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<SpringBootLogo />}
      >
        <h2 className="vertical-timeline-element-title">
          Microservices with Spring Boot and Spring Cloud, Apache Kafka and
          RabbitMQ
        </h2>
        <h3 className="vertical-timeline-element-subtitle">Udemy</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          Learn to Build Microservices using Spring Boot 3, Spring Cloud, React,
          Kafka, RabbitMQ, REST API, Docker & IntelliJ IDEA
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023 - Oct 2023"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<JavaLogo />}
      >
        <h2 className="vertical-timeline-element-title">
          Java Backend Bootcamp
        </h2>
        <h3 className="vertical-timeline-element-subtitle">Mindera</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Remote / Porto, Portugal
        </h4>
        <p>
          During 5 month bootcamp, I had the opportunity to learn a lot of
          software development covering the following topics:
        </p>
        <p>
          Introduction to programming: Intro to Java, Object Oriented
          Programming, Advanced Java, Functional Java, Network Programming,
          Concurrency.
        </p>
        <p>
          {" "}
          Back-end Programming: Software Architecture Maven Framework (Quarkus
          and Spring Boot) Data Persistence (SQL).
        </p>
        <p>Workshops: Git, Regex, Docker.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2023 - May 2023"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<JavaLogo />}
      >
        <h2 className="vertical-timeline-element-title">Warmup Java</h2>
        <h3 className="vertical-timeline-element-subtitle">Mindera</h3>
        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
        <p>
          Introductory course to initiate the development of computer algorithms
          solving problems for newbies!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Set 2018 - Fev 2022"
        iconStyle={{ background: "white", color: "#fff" }}
        icon={<StudentLogo />}
      >
        <h2 className="vertical-timeline-element-title">
          Bachelor's Degree Business Management
        </h2>
        <h3 className="vertical-timeline-element-subtitle">
          Instituto Superior de Contabilidade e Administração de Coimbra
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Coimbra, Portugal
        </h4>
        <p>
          Management and Financial Analysis, Economy, Microeconomics and
          Macroeconomics, Taxation, Audit, Accounting, Human Resource
          Management, Marketing.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
}
