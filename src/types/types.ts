import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface ISkill {
  name: string;
  list: { name: string; image: string | IconDefinition }[];
}

export interface IProject {
  link: string;
  title: string;
  description: string;
  techno: IconDefinition[];
  image: string;
}
