import "./navbar.scss";
import avatar from "../../assets/img/avatar.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <img src={avatar} alt="avatar" className="navbar__avatar" />
      </div>
      <nav className="navbar__menu">
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
