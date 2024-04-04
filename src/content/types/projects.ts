import { Attributes, BaseData, IndexAttributes } from '.';

interface ProjectIndexAttributes extends IndexAttributes {
  projects: BaseData<Project>;
}

export interface ProjectIndex {
  data: {
    id: number;
    attributes: ProjectIndexAttributes;
  };
}

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
