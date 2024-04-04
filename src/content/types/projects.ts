import { Attributes } from '.';

interface Link {
  id: number;
  url: string;
  linkType: string;
}

interface ProjectAttributes extends Attributes {
  link: Link[];
}

export interface Project {
  id: number;
  attributes: ProjectAttributes;
}
