import Info from "../../components/Info";
import AboutText from "../../components/AboutText";
import CV from "../../assets/goncalocravo_en.pdf";
import "./About.css";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Skills from "../../components/Skills";

export default function About() {
  return (
    <main className="section container bg-black max-w-full">
      <section className="about">
        <LampContainer className="">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="ml-36 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
          >
            About Me
          </motion.h1>
        </LampContainer>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download CV
            </a>
          </div>

          <div className="aboutText">
            <AboutText />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="personal-skills">
        <h2 className="section__subtitle subtitle_center sign">Skills</h2>
        <div className="skills">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
    </main>
  );
}
