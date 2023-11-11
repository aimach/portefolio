import "./skillSection.scss";
import { ISkill } from "../../types/types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  skill: ISkill;
}
export default function SkillCard({ skill }: Props) {
  return (
    <div className="skillSection__gridCard">
      <h5>{skill.name}</h5>
      <ul className="skillSection__gridCardList">
        {skill.list.map(
          (
            element: { name: string; image: string | IconDefinition },
            index: number
          ) => {
            const image =
              typeof element.image === "string" ? (
                <img src={element.image} alt={element.name} />
              ) : (
                <FontAwesomeIcon icon={element.image} />
              );
            return (
              <li key={index}>
                {image}
                <p>{element.name}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
