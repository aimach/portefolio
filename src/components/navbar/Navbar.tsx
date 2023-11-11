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
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#portefolio">Portefolio</a>
          </li>
          <li>
            <a href="#links">Liens</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
