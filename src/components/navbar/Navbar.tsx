import "./navbar.scss";
import avatar from "../../assets/img/avatar.png";

export default function Navbar() {
  return (
    <header>
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Compétences</li>
          <li>Portefolio</li>
          <li>Liens</li>
        </ul>
      </nav>
    </header>
  );
}
