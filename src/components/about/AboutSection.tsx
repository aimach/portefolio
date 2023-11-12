import "./aboutSection.scss";
import aboutImg from "../../assets/img/about.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutSection() {
  return (
    <section className="aboutSection" id="profil">
      <h3>A propos</h3>
      <div className="aboutSection__content">
        <img
          src={aboutImg}
          alt="office picture"
          className="aboutSection__avatar"
        />
        <div>
          <p className="aboutSection__paragraphe">
            <FontAwesomeIcon icon={faCheck} />
            Après 3 ans en tant que records manager dans le secteur public, je
            décide en 2022 de me <span>reconvertir</span> dans le développement
            web. Découvert au cours de mes études, ce domaine m'a longtemps
            attiré.{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            J'ai entamé ma reconversion professionnelle par un bootcamp de 5
            mois à la{" "}
            <a href="https://www.wildcodeschool.com/" target="_blank">
              <span>Wild Code School</span>
            </a>{" "}
            en septembre 2022 au cours duquel j'ai découvert le développement
            web avec <span>Javascript</span> et <span>React</span>. Cette
            formation a été l'occasion pour moi de développer{" "}
            <a href="#portefolio">
              <span>3 projets</span>
            </a>{" "}
            de groupe et de participer à 2 hackathons.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            J'ai enchaîné avec une <span>alternance</span> afin de pousser plus
            loin mon apprentissage, qui passe également par la transmission
            puisque je suis actuellement <span>teaching assistant</span> sur le
            bootcamp développement web de la Wild Code School. Lors des journées
            de cours, j'application l'apprentissage reçu sur une{" "}
            <a href="https://lamarr4.wns.wilders.dev/" target="_blank">
              <span>application</span>
            </a>{" "}
            développée en groupe.
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} />
            Je suis à la recherche d'un poste à partir de <span>
              mars 2023
            </span>{" "}
            !
          </p>
        </div>
      </div>
    </section>
  );
}
