import "./Skills.css";
import { skills } from "../data";
import { BackgroundGradient } from "../pages/ui/background-gradient";

export default function Skills() {
  return (
    <div className="skills-grid">
      {skills.map(({ id, title, img }) => {
        return (
          <div className="skills-boxes" key={id}>
            <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
              <div className="box">
                <img src={img} alt="" className={`image`} />
              </div>
            </BackgroundGradient>
            <p className="skill-name">{title}</p>
          </div>
        );
      })}
    </div>
  );
}
