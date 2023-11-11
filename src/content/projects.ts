import {
  faReact,
  faSass,
  faNodeJs,
  faDocker,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import express from "../assets/icons/express.svg";
import postgresql from "../assets/icons/postgresql.svg";
import prisma from "../assets/icons/prisma.svg";
import typescript from "../assets/icons/typescript.svg";
import cicd from "../assets/icons/cicd.png";
import malty from "../assets/img/malty.png";
import requestBuilder from "../assets/img/request-builder.png";
import cityGuide from "../assets/img/city-guide.png";
import deway from "../assets/img/deway.png";
import cotterie from "../assets/img/cotterie.png";
import makesense from "../assets/img/makesense.png";

export const projects = [
  {
    link: "https://aimach.github.io/request-builder",
    title: "RequestBuilder",
    description: "Outil pour apprendre Express et les requêtes HTTP",
    techno: [faReact],
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
    techno: [typescript, faReact, faSass, postgresql, faDocker, cicd],
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
    title: "Makesense",
    description: "Projet à présenter au titre",
    techno: [typescript, faReact, faSass, express, prisma],
    image: makesense,
  },
  {
    link: "https://coterie-frontend.toulouse-1.wilders.dev/",
    title: "Coterie",
    description: "Projet solo de bootcamp (réalisé en 48h)",
    techno: [faReact, faNodeJs, express, faFigma],
    image: cotterie,
  },
];
