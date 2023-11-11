import {
  faReact,
  faSass,
  faNodeJs,
  faDocker,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import malty from "../assets/img/malty.png";
import requestBuilder from "../assets/img/request-builder.png";
import cityGuide from "../assets/img/city-guide.png";
import deway from "../assets/img/deway.png";
import cotterie from "../assets/img/cotterie.png";

export const projects = [
  {
    link: "https://aimach.github.io/request-builder",
    title: "RequestBuilder",
    description: "Outil pour apprendre Express et les requêtes HTTP",
    techno: [faReact, faSass],
    image: requestBuilder,
  },
  {
    link: "https://malty-brewdog.netlify.app",
    title: "Malty",
    description: "Projet 2 de bootcamp",
    techno: [faReact],
    image: malty,
  },
  {
    link: "https://lamarr4.wns.wilders.dev/",
    title: "City Guide",
    description: "Projet d'alternance",
    techno: [faReact, faSass, faDocker],
    image: cityGuide,
  },
  {
    link: "https://deway.netlify.app",
    title: "Deway",
    description: "Projet 2 de bootcamp",
    techno: [faReact, faNodeJs],
    image: deway,
  },
  {
    link: "https://github.com/aimach/makesense2",
    title: "Makesense (solo)",
    description: "Projet à présenter au titre",
    techno: [faReact, faSass],
    image: "../../malty.png",
  },
  {
    link: "https://coterie-frontend.toulouse-1.wilders.dev/",
    title: "Coterie",
    description: "Projet solo de bootcamp (réalisé en 48h)",
    techno: [faReact, faNodeJs, faFigma],
    image: cotterie,
  },
];
