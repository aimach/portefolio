import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ISkill {
  name: string;
  list: string[];
}

export interface IProject {
  link: string;
  title: string;
  description: string;
  techno: IconDefinition[];
  image: string;
}
