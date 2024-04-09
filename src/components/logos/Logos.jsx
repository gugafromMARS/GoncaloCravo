import student from "../../assets/student_head.svg";
import reactIcon from "../../assets/react.svg";
import javascriptIcon from "../../assets/javascript.svg";
import javaIcon from "../../assets/java-icon.svg";
import springIcon from "../../assets/spring.svg";

export function ReactLogo() {
  return <img src={reactIcon} alt="react-logo" />;
}

export function JavascriptLogo() {
  return <img src={javascriptIcon} alt="js-logo" />;
}

export function SpringBootLogo() {
  return <img src={springIcon} alt="spring-logo" />;
}

export function JavaLogo() {
  return <img src={javaIcon} alt="java-logo" />;
}

export function StudentLogo() {
  return <img src={student} alt="student-logo" />;
}
