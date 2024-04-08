import Photo from "../../assets/edited.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import { BackgroundGradient } from "../ui/background-gradient";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { welcome } from "../../data";

export default function Home() {
  return (
    <section className="home section grid">
      <BackgroundGradient className=" p-4">
        <img src={Photo} alt="" className="home__img" />
      </BackgroundGradient>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__tittle">
            Hi!
            <p> I'm Gonçalo Cravo. </p>
            <TypewriterEffectSmooth words={welcome} className="mt-0 " />
          </h1>
          <p className="home__description">
            I have a bachelor's degree in Business Management, but I changed
            careers with a Java Backend Bootcamp.
          </p>

          <Link to="/GoncaloCravo/about" className="button">
            About Me{" "}
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}
