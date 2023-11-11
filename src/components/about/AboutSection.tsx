import "./aboutSection.scss";
import avatar from "../../assets/img/avatar.png";

export default function AboutSection() {
  return (
    <section className="aboutSection" id="profil">
      <h3>A propos</h3>
      <div className="aboutSection__content">
        <img src={avatar} alt="avatar" className="aboutSection__avatar" />
        <p className="aboutSection__paragraphe">
          Après 3 ans en tant que records manager dans le secteur public, je
          décide en 2022 de me reconvertir dans le développement web. Découvert
          au cours de mes études, ce domaine m'a longtemps attiré avant que je
          franchisse finalement le pas !
        </p>
      </div>
    </section>
  );
}
