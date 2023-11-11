import "./navbar.scss";
import avatar from "../../assets/img/avatar.png";

interface Props {
  scrollTop: number;
}

export default function Navbar({ scrollTop }: Props) {
  let classname = "navbar";
  scrollTop > 50 ? (classname += " navbar--backgroundColor") : classname;
  return (
    <header className={classname}>
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
