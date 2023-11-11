import "./portefolioSection.scss";
import { projects } from "../../content/projects";
import { IProject } from "../../types/types";
import PortefolioCard from "./PortefolioCard";

export default function PortefolioSection() {
  return (
    <section className="portefolioSection" id="portefolio">
      <h3>Projets</h3>
      <p className="portefolioSection__subtitle">
        Des réalisations effectuées durant ma formation ainsi que des projets
        personnels
      </p>
      <div className="portefolioSection__grid">
        {projects.map((project: IProject, index: number) => (
          <PortefolioCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
