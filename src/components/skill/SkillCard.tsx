import "./skillSection.scss";
import { ISkill } from "../../types/types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  skill: ISkill;
}
export default function SkillCard({ skill }: Props) {
  return (
    <div className="skillSection__gridCard">
      <h5>{skill.name}</h5>
      <ul className="skillSection__gridCardList">
        {skill.list.map((element: string, index: number) => (
          <li key={index}>
            <FontAwesomeIcon icon={faCheck} />
            <p>{element}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
