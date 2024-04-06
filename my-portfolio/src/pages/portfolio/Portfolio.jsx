"use client";
import { HeroParallax } from "../ui/hero-parallax";
import "./Portfolio.css";
import { projects } from "../../components/Projects";
import Footer from "../../components/Footer";

export default function Portfolio() {
  return (
    <section>
      <div className="projects">
        <HeroParallax projects={projects} />
      </div>
      <Footer />
      <div className="color__block"></div>
    </section>
  );
}
