import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./linkSection.scss";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import codewarsIcon from "../../assets/icons/codewars.png";

export default function LinkSection() {
  return (
    <section className="linkSection" id="links">
      <h3>Retrouvez-moi</h3>
      <div className="linkSection__container">
        <a href="https://www.linkedin.com/in/mariehschneider/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/aimach" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.codewars.com/users/aimach" target="_blank">
          <img src={codewarsIcon} alt="codewars" />
        </a>
      </div>
    </section>
  );
}
