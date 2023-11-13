import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./quoteSection.scss";
import {
  faQuoteLeft,
  faMugHot,
  faCompactDisc,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
  return (
    <section className="quoteSection">
      <h3>En ce moment</h3>
      <div className="quoteSection__container">
        <div className="quoteSection__card">
          <FontAwesomeIcon icon={faGraduationCap} />
          <p className="quoteSection__subtitle">
            En cours d'apprentissage ou approfondissement
          </p>
          <p className="quoteSection__subtitle">Prisma</p>
        </div>
        <div className="quoteSection__card">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p className="quoteSection__subtitle">
            "Quand vous avez éliminé l'impossible, ce qui reste, même
            improbable, doit être la vérité".
          </p>
          <p>Arthur Conan Doyle</p>
        </div>
        <div className="quoteSection__card">
          <FontAwesomeIcon icon={faMugHot} />
          <p className="quoteSection__subtitle">Anastasia</p>
          <p className="quoteSection__subtitle">Kusmi Tea</p>
        </div>
        <div className="quoteSection__card">
          <FontAwesomeIcon icon={faCompactDisc} />
          <p className="quoteSection__subtitle">Charlie Parker with strings</p>
          <p className="quoteSection__subtitle">Charlie Parker</p>
        </div>
      </div>
    </section>
  );
}
