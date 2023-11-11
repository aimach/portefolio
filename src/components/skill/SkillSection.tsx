import "./skillSection.scss";
import { skills } from "../../content/skills";
import SkillCard from "./SkillCard";
import { ISkill } from "../../types/types";

export default function SkillSection() {
  return (
    <section className="skillSection">
      <h3>Compétences</h3>
      <p className="skillSection__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente
        unde dolorem saepe architecto inventore sit dolor voluptatem, molestias
        nihil vitae qui quis, hic quidem eius suscipit eos autem illo!
      </p>
      <div className="skillSection__grid">
        {skills.map((skill: ISkill, index: number) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
}
