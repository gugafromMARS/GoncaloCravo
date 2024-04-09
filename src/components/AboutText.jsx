import "./AboutText.css";
import { BackgroundGradient } from "../pages/ui/background-gradient";

export default function AboutText() {
  return (
    <BackgroundGradient className="p-2 ">
      <div className="personalText">
        <p>
          My name is Gonçalo Cravo, I have a Bachelor Degree in Management, but
          I realized after a work experience that is not what I want to do.
          Since I was 11 years old I spend a lot of time on computer playing
          video games online, and now I can see computer is my habitat, so I
          joined in a Java Backend Bootcamp at{" "}
          <a href="https://minderacodeacademy.com/" target="_blank">
            @Mindera
          </a>
          . Today I'm a junior backend developer, and now I'm learning frontend
          (React) for become a fullstack developer!👨🏻‍💻
        </p>
      </div>
    </BackgroundGradient>
  );
}
