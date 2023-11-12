import "./quoteSection.scss";
import { Slide } from "react-slideshow-image";

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

export default function QuoteSection() {
  return (
    <section className="quoteSection">
      <div className="quoteSection__slideContainer">
        <h3>En ce moment</h3>
        <Slide
          onChange={function noRefCheck() {}}
          onStartChange={function noRefCheck() {}}
          arrows={false}
        >
          <div className="each-slide-effect">
            <div>
              <p className="quoteSection__subtitle">
                "Quand vous avez éliminé l'impossible, ce qui reste, même
                improbable, doit être la vérité".
              </p>
              <p>
                Le Retour de Sherlock Holmes (1903-1904) de Arthur Conan Doyle
              </p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <p className="quoteSection__subtitle">Anastasia - Kusmi Tea</p>
            </div>
          </div>
          <div className="each-slide-effect">
            <div>
              <p className="quoteSection__subtitle">
                Charlie Parker with strings
              </p>
              <p className="quoteSection__subtitle">Charlie Parker</p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
