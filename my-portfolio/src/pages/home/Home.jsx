import Photo from "../../assets/edited.jpg";
import Photo2 from "../../assets/edited1.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import { BackgroundGradient } from "../ui/background-gradient";

export default function Home() {
  return (
    <section className="home seciton grid">
      <BackgroundGradient className=" p-4">
        <img src={Photo} alt="" className="home__img" />
      </BackgroundGradient>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__tittle">
            Hi!
            <span> I'm Gonçalo Cravo. </span>
            Junior Backend Developer🧑🏻‍💻
          </h1>
          <p className="home__description">
            I have a bachelor's degree in Business Management, but I changed
            careers with a Java Backend Bootcamp.
          </p>

          <Link to="/about" className="button">
            About Me{" "}
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}
