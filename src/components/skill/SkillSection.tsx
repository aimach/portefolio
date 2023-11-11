import "./skillSection.scss";
import { skills } from "../../content/skills";
import SkillCard from "./SkillCard";
import { ISkill } from "../../types/types";

export default function SkillSection() {
  return (
    <section className="skillSection" id="skills">
      <h3>Compétences</h3>
      <p className="skillSection__subtitle">
        Des compétences acquises lors de mes formations (bootcamp, alternance)
        et lors du développement de side projects.
      </p>
      <div className="skillSection__grid">
        {skills.map((skill: ISkill, index: number) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
}
