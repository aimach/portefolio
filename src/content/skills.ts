import { ISkill } from "../types/types";
import {
  faReact,
  faSass,
  faNodeJs,
  faDocker,
  faFigma,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import express from "../assets/icons/express.svg";
import postgresql from "../assets/icons/postgresql.svg";
import prisma from "../assets/icons/prisma.svg";
import scrum from "../assets/icons/scrum.png";
import typescript from "../assets/icons/typescript.svg";
import cicd from "../assets/icons/cicd.png";

export const skills: ISkill[] = [
  {
    name: "Frontend",
    list: [
      { name: "Typescript", image: typescript },
      { name: "React", image: faReact },
      { name: "Sass", image: faSass },
    ],
  },
  {
    name: "Backend",
    list: [
      { name: "NodeJS", image: faNodeJs },
      { name: "Express", image: express },
    ],
  },
  {
    name: "Database",
    list: [
      { name: "postgreSQL", image: postgresql },
      { name: "Prisma", image: prisma },
    ],
  },
  {
    name: "DevOps",
    list: [
      { name: "git", image: faGit },
      { name: "GitHub", image: faGithub },
      { name: "Docker", image: faDocker },
      { name: "CI/CD", image: cicd },
    ],
  },
  {
    name: "Other",
    list: [
      { name: "Figma", image: faFigma },
      { name: "Agile/Scrum", image: scrum },
    ],
  },
];
